import { Component, OnInit } from '@angular/core';
import { GestionnaireService } from 'app/Services/gestionnaire.service';
import { RepondreReclamationGestDialogComponent } from '../repondre-reclamation-gest-dialog/repondre-reclamation-gest-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-liste-reclamation',
  templateUrl: './liste-reclamation.component.html',
  styleUrls: ['./liste-reclamation.component.css']
})
export class ListeReclamationComponent implements OnInit {
  tab: any[];

  constructor(public dialog: MatDialog,private gestionnaireService:GestionnaireService) { }

  ngOnInit(): void {
    let res = this.gestionnaireService.getAllReclamations();
  res.subscribe(
    data1 => {
      console.log
      (data1);
        this.tab = data1;
       
       
    },
    err => {
      console.log("breaks here get liste des reclamations");
    }
  );

  }
  openDialog(nom,prenom,email:any){

    const dialogRef = this.dialog.open(RepondreReclamationGestDialogComponent, {
      width: '500px',
      data: {  nom,prenom,email},
    });
  
  dialogRef.afterClosed().subscribe(result=>{
    console.log('The dialog was closed');

  })
  
  
}
}