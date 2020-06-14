import { MatDialog } from '@angular/material/dialog';
import { GestionnaireService } from 'app/Services/gestionnaire.service';
import { Component, OnInit } from '@angular/core';
import { ModifSessionDialogComponent } from '../modif-session-dialog/modif-session-dialog.component';

@Component({
  selector: 'app-gestion-sessions',
  templateUrl: './gestion-sessions.component.html',
  styleUrls: ['./gestion-sessions.component.css']
})
export class GestionSessionsComponent implements OnInit {
listeSessions:any;
  constructor(public gestService:GestionnaireService,
    public dialog:MatDialog) { }

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

  EditSession(session:any ){
    const dialogRef = this.dialog.open(ModifSessionDialogComponent, {
      width: '800px',
      data:session,
     
    });
  }

}
