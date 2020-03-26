import { GestionnaireService } from 'app/Services/gestionnaire.service';
import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-affect-formateur-dialog',
  templateUrl: './affect-formateur-dialog.component.html',
  styleUrls: ['./affect-formateur-dialog.component.css']
})
export class AffectFormateurDialogComponent implements OnInit {
  form: FormGroup;
  nom:string;

  prenom:String;
  name:String;

  date:string;
  listFormateur:any;
  constructor(public dialogRef: MatDialogRef<AffectFormateurDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private formBuilder: FormBuilder,

              private gestinnaireService: GestionnaireService,
              public dialog: MatDialog) {

               }

  ngOnInit(): void {
this.gestinnaireService.getAllFormateurs().subscribe((res)=>{

  this.listFormateur=res;
}

);

  }

  openDialog(item:any){

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { item },
    });
    dialogRef.afterClosed().subscribe(result => {
     this.dialogRef.close(result.item);
    })

  }

}
