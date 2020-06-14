import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from '@angular/material/core';
import { AffectFormateurDialogComponent } from '../affect-formateur-dialog/affect-formateur-dialog.component';
@Component({
  templateUrl: './modif-session-dialog.component.html',
  styleUrls: ['./modif-session-dialog.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class ModifSessionDialogComponent implements OnInit {
  form: FormGroup;
  minDate:any =new Date();
  nomPrenomFormateur:string;
idFormateur:number;
session=this.data;
  constructor(public dialogRef: MatDialogRef<ModifSessionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,private fb: FormBuilder , private _adapter: DateAdapter<any>,){
      this.form=fb.group({
        theme:new FormControl(this.session.theme,[Validators.required]),
        dateDebut:new FormControl(this.session.date_debut,[Validators.required]),
        dateFin:new FormControl(this.session.date_fin,[Validators.required]),
        heureDebut: new FormControl(this.session.heure_debut,[Validators.required]),
        heureFin:new FormControl(this.session.heure_fin,[Validators.required]),
        
        prix: new FormControl(this.session.prix,[Validators.required,Validators.min(0)]),
        nbApprenant:new FormControl(this.session.nbApprenant,[Validators.required])
        
        
            });
    }
    dateFilter = (d: Date): boolean => {
   

      const date =new Date(d).getDay();
      console.log(d);
      // SEBT W AHAD are disabled.
      return date !== 0 && date !== 6;
  
    }

  ngOnInit(): void {
console.log(this.session);
    this._adapter.setLocale('fr');


  }


  openDialog(){

    const dialogRef = this.dialog.open(AffectFormateurDialogComponent, {
      width: '700px',
      data: {  },
    });
  
  dialogRef.afterClosed().subscribe(result=>{
    console.log("back to gestion session "+result.user_id);
    this.nomPrenomFormateur=result.nom+' '+result.prenom;
    this.idFormateur=result.user_id;
  })
  
  
  }



  onSubmit(){


  //   this.gestionnaireService.ajoutSession(this.f,this.idFormateur).subscribe(data=>{
  //     console.log('session posted');
  //     this.notification.showNotification('top','right','success','Session Ajouté');
  //   });
   
  //  this.userService.sendnotif(this.idFormateur,1).subscribe(data=>{
  //    console.log('notified');
   
  //  });
   
   
   
   
     }
}
