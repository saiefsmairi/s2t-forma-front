import { NotificationsComponent } from './../notifications/notifications.component';
import { SessionService } from 'app/Services/session.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AjoutSupportCoursDialogComponent } from '../ajout-support-cours-dialog/ajout-support-cours-dialog.component';
import { PdfPreviewDialogComponent } from '../pdf-preview-dialog/pdf-preview-dialog.component';
import { FormateurService } from 'app/Services/formateur.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ModifierPresenceParFormateurDialogComponent } from '../modifier-presence-par-formateur-dialog/modifier-presence-par-formateur-dialog.component';
import { UserService } from 'app/Services/user.service';
import { formatDate } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  id: any;
  private sub: any;
  listeApprenantsInscrits: any;
  userRole: any = JSON.parse(sessionStorage.getItem('auth-user')).roles[0];
  listeDocuments: any;
   date = new Date();
theme;
datedebut;
datefin;
nbMAxApp;
status;
nomFormateur;
prenomFormateur;
userData;
quest1="La formation que vous venez de suivre a-t-elle respecté le programme annoncé et atteint les objectifs";
quest2="Pensez-vous que les connaissances que vous avez acquises pourront etre mises en oeuvre dans votre travail ?";
quest3="Le niveau de compétences techniques de l'animateur vous a paru";
quest4="Les supports pédagogiques utilisés par l'animateur sont-ils satisfaisantes? (qualité, contenu...)";
quest5="Les conditions du déroulement de la formation (accueil, local, restauration, rythme, hébergement, durée) vous ont_ils paru ?";
quest6="Souhaiteriez-vous une suite à cette formation ?";

quest1Forma="Commentez le niveau taux participation des stagiaires l'ambiance de votre session rapidité d'exécution des travaux individuels et de groupe participation de quelques stagiaires seulement vivacité participative questions pertinentes"
quest2Forma="Avez-vous pu dérouler tout le contenu pédagogique dans le temps imparti ?";
quest3Forma="après évaluation rapide de votre session quels sont vos conclusions";
quest4Forma="éventuels problèmes rencontrés";
quest5Forma="Vos propositions d'amélioration";
tabQuest:any;
form:FormGroup;
form1:FormGroup;
formattedDate;
tabQuestForma ;

  constructor(private route: ActivatedRoute,
    private userService:UserService,
    private _snackBar: MatSnackBar,
    public formateurService:FormateurService,
    public sessionService: SessionService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    public notif: NotificationsComponent) {
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id'];


     });
     this.form=fb.group({
      typecheck1:new FormControl('',[Validators.required]),
      typecheck2:new FormControl('',[Validators.required]),
      typecheck3:new FormControl('',[Validators.required]),
      typecheck4:new FormControl('',[Validators.required]),
      typecheck5:new FormControl('',[Validators.required]),
      typecheck6:new FormControl('',[Validators.required])
          });

          this.form1=fb.group({
            reponse1:new FormControl('',[Validators.required]),
            reponse2:new FormControl('',[Validators.required]),
            reponse3:new FormControl('',[Validators.required]),
            reponse4:new FormControl('',[Validators.required]),
            reponse5:new FormControl('',[Validators.required]),
                });
     }

  ngOnInit(): void {
    this.userData = JSON.parse(sessionStorage.getItem('auth-user'));
    

    this.sessionService.getSessionByid(this.id).subscribe(data => {
this.theme=data.theme;
this.datedebut=data.date_debut;
this.nbMAxApp=data.nbApprenant;
this.datefin=data.date_fin;
this.nomFormateur=data.formateur.nom;
this.prenomFormateur=data.formateur.prenom;
var dateObj = new Date();
const format = 'yyyy-MM-dd';
const myDate = dateObj;
const locale = 'en-US';
this.formattedDate = formatDate(myDate, format, locale);

console.log(this.formattedDate+""+this.datefin)

if(this.formattedDate>=this.datedebut&&this.formattedDate<=this.datefin){
  this.status=true;
}
else { this.status=false;}

    });

this.loadData();


  }
  public removeValidators(form: FormGroup) {
    for (const key in form.controls) {
      this.form.get(key).clearValidators();
      this.form.get(key).updateValueAndValidity();
    }
  }
  get f(){return this.form.controls}
  

  onFeedbackFormSubmit(){
    this.tabQuest = [
      {
          question: this.quest1,
          check:  this.f.typecheck1.value,
      },
      {
        question: this.quest2,
        check:  this.f.typecheck2.value,
    },
    {
      question: this.quest3,
      check:  this.f.typecheck3.value,
  },
  {
    question: this.quest4,
    check:  this.f.typecheck4.value,
},
{
  question: this.quest5,
  check:  this.f.typecheck5.value,
},
{
  question: this.quest6,
  check:  this.f.typecheck6.value,
}
  ];


  if(!this.form.invalid){
    this.tabQuest.forEach(element => {
      console.log(element.check);
      this.userService.SendFeedback(element.question,element.check,'Apprenant',this.userData.id,this.id).subscribe(data=>{
      
        
      });
   
    });
    this.notif.showNotification('top', 'right', 'success', 'Votre Avis sur Cette session à été envoyé avec succées')
  this.form.reset();
    this.removeValidators(this.form);


    }
    else    this.notif.showNotification('top', 'right', 'danger', 'Veuillez Répondre sur toutes les questions')

    
   
  
    

  }
  get f1(){return this.form1.controls}
 
  onFeedbackFormateurFormSubmit(){
    this.tabQuestForma = [
      {
          question: this.quest1Forma,
          check:  this.f1.reponse1.value,
      },
      {
        question: this.quest2Forma,
        check:  this.f1.reponse2.value,
    },
    {
      question: this.quest3Forma,
      check:  this.f1.reponse3.value,
  },
  {
    question: this.quest4Forma,
    check:  this.f1.reponse4.value,
},
{
  question: this.quest5Forma,
  check:  this.f1.reponse5.value,
}
  ];

  if(!this.form1.invalid){
    this.tabQuestForma.forEach(element => {
      this.userService.SendFeedback(element.question,element.check,'Formateur',this.userData.id,this.id).subscribe(data=>{
      
        
      });
   
    });
    this.notif.showNotification('top', 'right', 'success', 'Votre Avis sur Cette session à été envoyé avec succées')
    this.form1.reset();
    for (const key in this.form1.controls) {
      this.form1.get(key).clearValidators();
      this.form1.get(key).updateValueAndValidity();
    }
  }
   
  else    this.notif.showNotification('top', 'right', 'danger', 'Veuillez Répondre sur toutes les questions')


  }
  addSupport() {
    const dialogRef = this.dialog.open(AjoutSupportCoursDialogComponent, {
      width: '700px',
      data: { id: this.id,
      typeop: 'Add' ,
    tab: this.listeApprenantsInscrits },
    });

  dialogRef.afterClosed().subscribe(result => {
 if (result == 'ajouté') {
   this.notif.showNotification('top', 'right', 'success', 'Support de cours ajouté avec success')
this.loadData();
 }

  });


  }
  
  

  OnPresenceButtonClick(id,etat){
     this.date.setMinutes(this.date.getMinutes()-60);
    this.formateurService.ajoutRegistre(this.id,id,etat,this.date).subscribe(data=>{
      console.log('registre postedd');
      this.notif.showNotification('top', 'right', 'success', 'Apprenant Marqué '+etat+' avec success')

   
      let res = this.formateurService.TauxAbsence(id,this.id)
      res.subscribe(
        data1 => {
          if(data1>3){
          this.userService.sendnotif(id,3).subscribe(data=>{
            console.log('notified');
          
          });
                  }
        },
        err => {
          console.log("breaks here get TauxAbsence");
        }
      );

   
    },
          err => {
            console.log('breaks here on ajout registre');
            this.notif.showNotification('top', 'right', 'danger', 'vous avez déja marquer la présence pour ce apprenant pour aujourdhui')

         
          })
    
    ; 
 
  
   
  }


  EditPresence(id,nom,prenom) {
    const dialogRef = this.dialog.open(ModifierPresenceParFormateurDialogComponent, {
      width: '700px',
      data: { id:id,
        date: this.date,
      nom:nom,
    prenom:prenom},
    });



  }

  EditSupport(document:any) {
    const dialogRef = this.dialog.open(AjoutSupportCoursDialogComponent, {
      width: '700px',
      data: { id: document.id,
      typeop: 'Edit' ,
    document},
    });

  dialogRef.afterClosed().subscribe(result => {
 if (result === 'ajouté') {
   this.notif.showNotification('top', 'right', 'success', 'Support de cours ajouté avec success')
this.loadData();
 } else {
  this.notif.showNotification('top', 'right', 'success', 'Support de cours modifié avec success')
  this.loadData();
 }


  });


  }

public openPdf(id) {


  this.sessionService.getSupportCours(id).subscribe(res => {
console.log(res.file);
   const dialogRef = this.dialog.open(PdfPreviewDialogComponent, {
     width: '1000px',
    data: { file: res.file },
   });

  })
}

loadData() {
  this.sessionService.getSessionInfo(this.id, 'formateur').subscribe(data => {
    console.log(data);
    this.listeDocuments = data.documents;
    this.listeApprenantsInscrits = data.apprenants;
  });
}

public DeletePdf(id) {


  this.sessionService.DeleteSupportCours(id).subscribe(res => {
    this.notif.showNotification('top', 'right', 'success', 'Cours Supprimé');
this.loadData();

  })
}

generateReport(){
  this.formateurService.getRegistreReport('pdf', this.id).subscribe(data => {
    

  });
  this.notif.showNotification('top', 'right', 'success', 'Fiche de présence génerer dans E')

}

}
