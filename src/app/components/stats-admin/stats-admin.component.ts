import { Component, OnInit } from '@angular/core';
import { SessionService } from 'app/Services/session.service';
import { Chart } from 'chart.js';
import { UserService } from 'app/Services/user.service';


@Component({
  selector: 'app-stats-admin',
  templateUrl: './stats-admin.component.html',
  styleUrls: ['./stats-admin.component.scss']
})
export class StatsAdminComponent implements OnInit {
tabTheme:string[];
count=[];

chart1;chart2;chart3;
  constructor(private sessionService:SessionService,private userService:UserService) { }

  ngOnInit(): void {
    
  this.sessionService.AllSessions().subscribe(res => {

    let theme=[];
    let count=[];

res.forEach(element => {
 theme.push(element['theme']);
 count.push(element['count']);

});

this.chart1 = new Chart('canvas', {
        
  type: 'pie',
  data:{
    labels:  theme,
    datasets:[{
   
      data:count,
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
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


      this.sessionService.NbSessionParMonth().subscribe(res => {

        let dateSession=[];
        let count=[];

    res.forEach(element => {
      var d = new Date(element['dateSession']);
      const month = d.toLocaleString('default', { month: 'long' });
      dateSession.push(element['monthOfSession']);
      count.push(element['count']);

    });

    
this.chart2 = new Chart('canvas2', {
        
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
    responsive:true,
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
      
          this.userService.Allusers().subscribe(res => {
            let typecompte=[];
            let count=[];
    
        res.forEach(element => {
          typecompte.push(element['typecompte']);
         count.push(element['count']);
        
                   console.log(res);

                  });
              
 this.chart3 = new Chart('canvas3', {
        
  type: 'doughnut',

  data:{
    
    labels:  typecompte,
    datasets:[{
   
      data:count,
      backgroundColor: [
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
      text:"Nombre des Utilisateurs",
      display:true
    },
    
  }
  
});  
          

       
            
    
       

        
 
         
              })      
 
  }

}
