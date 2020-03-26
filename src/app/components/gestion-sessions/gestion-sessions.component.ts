import { NotificationsComponent } from './../notifications/notifications.component';
import { GestionnaireService } from './../../Services/gestionnaire.service';
import { AffectFormateurDialogComponent } from './../affect-formateur-dialog/affect-formateur-dialog.component';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
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
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-gestion-sessions',
  templateUrl: './gestion-sessions.component.html',
  styleUrls: ['./gestion-sessions.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class GestionSessionsComponent implements OnInit {
form: FormGroup;
minDate:any =new Date();
nomPrenomFormateur:string;
idFormateur:number;


  constructor(private fb: FormBuilder , private _adapter: DateAdapter<any>,  public dialog: MatDialog,
    private gestionnaireService: GestionnaireService,public notification:NotificationsComponent) { 
    this.form=fb.group({
theme:new FormControl('',[Validators.required]),
dateDebut:new FormControl('',[Validators.required]),
dateFin:new FormControl('',[Validators.required]),
heureDebut: new FormControl('',[Validators.required]),
heureFin:new FormControl('',[Validators.required]),
prix: new FormControl('',[Validators.required,Validators.min(0)]),
nbApprenant:new FormControl('',[Validators.required])

    });
  }

  ngOnInit(): void {
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
console.log(this.f);
this.gestionnaireService.ajoutSession(this.f,this.idFormateur).subscribe(data=>{
  console.log('posted');
  this.notification.showNotification('top','right','success','Session Ajouté');
});

  }

get f(){return this.form.controls}

}
