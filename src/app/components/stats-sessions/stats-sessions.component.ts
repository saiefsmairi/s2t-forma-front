import { Component, OnInit } from '@angular/core';
import { SessionService } from 'app/Services/session.service';
import { FormateurService } from 'app/Services/formateur.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stats-sessions',
  templateUrl: './stats-sessions.component.html',
  styleUrls: ['./stats-sessions.component.scss']
})
export class StatsSessionsComponent implements OnInit {
sessionSelected;
tabSession:[];
chart1:any;
chart2:any;

empty:any;
tauxAbsencePourStats:[];
  constructor(private sessionService:SessionService,private formateurService:FormateurService ) { }

  ngOnInit(): void {

    this.sessionService.AllSessions().subscribe(res => {

      let theme=[];
      let count=[];
  
  res.forEach(element => {
   theme.push(element['theme']);
   count.push(element['count']);
  
  });
  
  this.chart1 = new Chart('canvas3', {
          
    type: 'pie',
    data:{
      labels:  theme,
      datasets:[{
     
        data:count,
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgb(255,159,64)',
        'rgb(255,99,132)',
        'rgb(54,162,235)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
         
      ],
      }]
    },
    options:{
      responsive:true,
  
      title:{
        text:"Théme le plus demandé",
        display:true
      }
    }
    
  });   
        })   


    this.sessionService.FindAllSessionsWithoutwhere().subscribe(data => {
this.tabSession=data;
    });

    this.sessionService.NbSessionParMonth().subscribe(res => {

      let dateSession=[];
      let count=[];

  res.forEach(element => {
    var d = new Date(element['dateSession']);
    const month = d.toLocaleString('default', { month: 'long' });
    dateSession.push(element['monthOfSession']);
    count.push(element['count']);

  });

  
this.chart1 = new Chart('canvas2', {
      
type: 'line',
data:{
  labels:  dateSession,
  datasets:[{
 
    data:count,
    borderColor:'#3cba9f',
    fill:false
  
    
  }]
},
options:{
   
  legend:{
    display:false
  },
  title:{
    text:"Nombre de sessions par Mois ",
    display:true
  },
  scales:{
  
    xAxes:[{
      
      display:true,
    }],
    yAxes: [{
      display:true,

      ticks: {
        stepSize: 1,
        beginAtZero: true,
      }
  }],
  }
}

});  
        })   

  
  }

  tauxAbsencePourUneSession(){
    if(this.chart2) this.chart2.destroy();

    this.formateurService.tauxAbsencePourStats(this.sessionSelected).subscribe(data => {
      console.log(data);
    
      let countAbsence=[];
      let countPresence=[];
      let apprenant=[];

     
  data.forEach(element => {
    countAbsence.push(element['countabsent']);
    countPresence.push(element['countpresent']);
    apprenant.push(element['username']);

  });


  this.chart2 = new Chart('canvas', {
        
    type: 'bar',
    data:{
      labels: apprenant,
      datasets:[
        {
        data:countPresence,
        backgroundColor:"#E12424",
        borderColor:'#E12424',
        borderWidth:2,
      },
      {
        data:countAbsence,
        backgroundColor:"#3AD35A",
        borderColor:'#3AD35A',
        borderWidth:2,
      },
    ]
    },
    options:{
       
      legend:{
        display:false
      },
      title:{
        text:"Nombre De Présence et Absence Pour chaque Apprenant Durant cet session ",
        display:true
      },
      scales:{
      
        xAxes:[{
          
          display:true,
        }],
        yAxes: [{
          display:true,
  
          ticks: {
            stepSize: 1,
            beginAtZero: true,
          }
      }],
      }
    }
    
  });  
 

      
          });

     
  }

b(){
  this.chart1.clear();
}

}
