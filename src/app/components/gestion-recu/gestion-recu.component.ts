import { Component, OnInit } from '@angular/core';
import { GestionnaireService } from 'app/Services/gestionnaire.service';
import { MatDialog } from '@angular/material/dialog';
import { PhotoRecuDialogComponent } from '../photo-recu-dialog/photo-recu-dialog.component';

@Component({
  selector: 'app-gestion-recu',
  templateUrl: './gestion-recu.component.html',
  styleUrls: ['./gestion-recu.component.css']
})
export class GestionRecuComponent implements OnInit {
  listRecus:any;
  constructor(private gestionnaireService:GestionnaireService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    let res = this.gestionnaireService.getAllRecus();
  res.subscribe(
    data1 => {
      console.log
      (data1);
        this.listRecus = data1;
       
       
    },
    err => {
      console.log("breaks here get liste des recu");
    }
  );
  }

openDialog(photo,user_id,session_id,idRecu):any{

  const dialogRef = this.dialog.open(PhotoRecuDialogComponent, {
    width: "700px",
    data: {photo,
      user_id,
      session_id,
      idRecu
    }
  });
}




}
