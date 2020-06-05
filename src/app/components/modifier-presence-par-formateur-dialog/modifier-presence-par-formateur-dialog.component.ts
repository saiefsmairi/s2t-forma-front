import { Component, OnInit, Inject } from '@angular/core';
import { FormateurService } from 'app/Services/formateur.service';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { formatDate } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-modifier-presence-par-formateur-dialog',
  templateUrl: './modifier-presence-par-formateur-dialog.component.html',
  styleUrls: ['./modifier-presence-par-formateur-dialog.component.css']
})
export class ModifierPresenceParFormateurDialogComponent implements OnInit {
date;
id;
nom;
prenom;
selected;
etatfromregistre;
disabledetat:any;
form: FormGroup;

  constructor(private formateurService:FormateurService,
    private httpClient: HttpClient,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModifierPresenceParFormateurDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
      this.date=this.data.date;
      this.id=this.data.id;
      this.nom=this.data.nom;
      this.prenom=this.data.prenom;
     }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      selectedEtat: new FormControl('', [
        Validators.required,
      ]),
    
    });

    
    const format = 'yyyy-dd-MM';

    const locale = 'en-US';
    let newDate = new Date(this.date);
    newDate.setMinutes(newDate.getMinutes()-60);
    
    const formattedDate = formatDate(newDate.toLocaleDateString(), format, locale);
    let res = this.formateurService.getRegistrePerUserPerDate(this.id,formattedDate)
    res.subscribe(
      data1 => {
this.etatfromregistre=data1[0].etat;
          console.log(data1);
        

         
      },
      err => {
        console.log("breaks here get getRegistrePerUserPerDate");
      }
    );

  }

  onSubmit(){

    const format = 'yyyy-dd-MM';

    const locale = 'en-US';
    let newDate = new Date(this.date);
    newDate.setMinutes(newDate.getMinutes()-60);
    
    const formattedDate = formatDate(newDate.toLocaleDateString(), format, locale);
    let res = this.formateurService.getRegistrePerUserPerDate(this.id,formattedDate)
    res.subscribe(
      data1 => {
          console.log(data1);
          console.log(data1[0].registre_id);

          this.formateurService.updatepresence(data1[0].registre_id, this.selected ).subscribe(
            data => {
              console.log(data);
              this._snackBar.open("etat de présence modifié avec succées","", {
                duration: 4000,
              });
            
      
            },
            err => {
              console.log('breaks here on updated presence');
              this._snackBar.open("erreur lors de la modification de l'etat de présence ","", {
                duration: 4000,
              });
            }
          );
      },
      err => {
        console.log("breaks here get getRegistrePerUserPerDate");
      }
    );


  
  }

  onNoClick(){
    this.dialogRef.close();

  }

}
