import { FormateurService } from './../../Services/formateur.service';
import { UserService } from 'app/Services/user.service';
import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
userRole:any = JSON.parse(sessionStorage.getItem('auth-user')).roles[0];
userId:any = JSON.parse(sessionStorage.getItem('auth-user')).user_id;
listSessions:any;
  constructor(public userService :UserService ,
    public formateurService:FormateurService) { }
  
 
      

  
  
  ngOnInit(){

this.getSessions();


     

    }

getSessions(){

switch (this.userRole){
case 'ROLE_APPRENANT' :{
  this.userService.getUserSessions(this.userId).subscribe(data=>{
    console.log(data)
  this.listSessions=data;
  });
break;
}
case 'ROLE_FORMATEUR' :{
  this.formateurService.getUserSessions(this.userId).subscribe(data=>{
    console.log(data)
  this.listSessions=data;
  });
break;
}

}


}

    
  }

