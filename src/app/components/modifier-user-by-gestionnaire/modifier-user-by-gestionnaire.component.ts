import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GestionnaireService } from 'app/Services/gestionnaire.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-modifier-user-by-gestionnaire',
  templateUrl: './modifier-user-by-gestionnaire.component.html',
  styleUrls: ['./modifier-user-by-gestionnaire.component.css']
})
export class ModifierUserByGestionnaireComponent implements OnInit {
  
    cin: any;
    nom: any;
    prenom: any;
    email: any;
    tel: any;
    id: any;
    form: FormGroup;

    constructor(private httpClient: HttpClient,
      private _snackBar: MatSnackBar,
      private formBuilder: FormBuilder,
      private gestService: GestionnaireService,
      public dialog: MatDialog,
      public dialogRef: MatDialogRef<ModifierUserByGestionnaireComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
     ) {
    
     }

  ngOnInit(): void {

    this.cin=this.data.cin;
    this.nom=this.data.nom;
    this.prenom=this.data.prenom;
    this.email=this.data.email;
    this.tel=this.data.tel;
    this.id=this.data.id;

    this.form = this.formBuilder.group({
      cin: new FormControl(this.cin, [
        Validators.required,
        Validators.pattern('[0-9]{8}')
      ]),
      email: new FormControl(this.email, [
        Validators.required,
        Validators.email
      ]),

      nom: new FormControl(this.nom, [Validators.required]),
      prenom: new FormControl(this.prenom, [Validators.required]),
      tel: new FormControl(this.tel, [
        Validators.required,
        Validators.pattern('[0-9]{8}')
      ])
    });

   
  }
  get f() {
    return this.form.controls;
  }

  onSubmit() {
  
    Object.keys(this.form.controls).forEach(key => {

     // console.log( this.form.controls[key]);
      if(  this.form.controls[key].pristine==false){
       // console.log( key);
        this.gestService.update(this.f, this.id, key).subscribe(
          data => {
            console.log(data);
            this._snackBar.open("profil mis à jour avec succées","", {
              duration: 2000,
            });
          

          },
          err => {
            console.log('breaks here on updated profil by gestionnaire');
            this._snackBar.open("profil mis à jour echoué , les données que vous avez entrez existe déja","", {
              duration: 4000,
            });
          }
        );
      }
      this.form.controls[key].markAsPristine();

    });
   
  }

  onNoClick(){
    this.dialogRef.close();

  }
}
