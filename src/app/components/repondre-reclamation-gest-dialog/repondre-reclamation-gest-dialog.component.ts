import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { GestionnaireService } from 'app/Services/gestionnaire.service';
import { UserService } from "app/Services/user.service";
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-repondre-reclamation-gest-dialog',
  templateUrl: './repondre-reclamation-gest-dialog.component.html',
  styleUrls: ['./repondre-reclamation-gest-dialog.component.css']
})
export class RepondreReclamationGestDialogComponent implements OnInit {
  reponse:string;
   constructor(public dialogRef: MatDialogRef<RepondreReclamationGestDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private formBuilder: FormBuilder,
              private userService: UserService,
              private gestinnaireService: GestionnaireService,
              public dialog: MatDialog,private _snackBar: MatSnackBar) {

               }

  ngOnInit(): void {
   
  }

  sendReponse(reponse:any){
      this.userService.SendMailReponseRecla(this.data.nom,this.data.prenom,this.data.email,reponse).subscribe(
      data => {
        //console.log(data);
     
      },
      err => {
        console.log("breaks here");
        // this.errorMessage = err.error.message;
      }
    );
    this._snackBar.open("Réponse Envoyé avec succées","", {
      duration: 2000,
    });
  }

}