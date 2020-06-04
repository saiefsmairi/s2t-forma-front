import { GestionnaireService } from 'app/Services/gestionnaire.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-sessions',
  templateUrl: './gestion-sessions.component.html',
  styleUrls: ['./gestion-sessions.component.css']
})
export class GestionSessionsComponent implements OnInit {
listeSessions:any;
  constructor(public gestService:GestionnaireService) { }

  ngOnInit(): void {
this.reloadData();


  }

  reloadData(){
    this.gestService.getAllSessions().subscribe(res=>{
      this.listeSessions=res;
      console.log(this.listeSessions)
    });
  }
  DeleteSession(id:any){
    this.gestService.DeleteSession(id).subscribe(res=>{
      this.reloadData();
    })
  }

}
