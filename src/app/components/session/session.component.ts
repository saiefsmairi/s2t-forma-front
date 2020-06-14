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

  constructor(private route: ActivatedRoute,
    private userService:UserService,
    private _snackBar: MatSnackBar,
    public formateurService:FormateurService,
    public sessionService: SessionService,
    public dialog: MatDialog,
    public notif: NotificationsComponent) {
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id'];


     });

     }

  ngOnInit(): void {
    this.sessionService.getSessionByid(this.id).subscribe(data => {
      console.log(data)
this.theme=data.theme;
this.datedebut=data.date_debut;
this.nbMAxApp=data.nbApprenant;
this.datefin=data.date_fin;

var dateObj = new Date();
const format = 'yyyy-MM-dd';
const myDate = dateObj;
const locale = 'en-US';
const formattedDate = formatDate(myDate, format, locale);

if(this.datedebut<=formattedDate){
  this.status=true;
}
else this.status=false;

    });

this.loadData();


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
