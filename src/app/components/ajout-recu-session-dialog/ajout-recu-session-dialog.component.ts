import { GestionnaireService } from 'app/Services/gestionnaire.service';
import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajout-recu-session-dialog',
  templateUrl: './ajout-recu-session-dialog.component.html',
  styleUrls: ['./ajout-recu-session-dialog.component.css']
})
export class AjoutRecuSessionDialogComponent implements OnInit {
  form: FormGroup;
  nom:string;

  prenom:String;
  name:String;

  date:string;
  listFormateur:any;

  theme;
  prix;
  constructor(public dialogRef: MatDialogRef<AjoutRecuSessionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,

    private gestinnaireService: GestionnaireService,
    public dialog: MatDialog) {
      this.theme=data.theme;
      this.prix=data.prix;

     }

     ngOnInit(): void {
    
      
      
      console.log(this.theme);
        }
      
     

}
