import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadCertifDialogComponent } from '../upload-certif-dialog/upload-certif-dialog.component';
import { UserInfoDialogComponent } from '../user-info-dialog/user-info-dialog.component';
import { UserService } from 'app/Services/user.service';
import { GestionnaireService } from 'app/Services/gestionnaire.service';

@Component({
  selector: 'app-completion-dossier',
  templateUrl: './completion-dossier.component.html',
  styleUrls: ['./completion-dossier.component.css']
})
export class CompletionDossierComponent implements OnInit {
  userCertifs: any;
  listCertif:any;
  userData:any;
  userId:any;
  
 
  constructor(  public dialog: MatDialog,private userService
:UserService,private gestionnaireService:GestionnaireService
) { }

  ngOnInit(): void {
  
  this.userData = JSON.parse(sessionStorage.getItem('auth-user'));
  this.userId=this.userData.id;
  this.listCertif = this.userData.certifs;
this.loadCertif();
  }


openDialog(id){
  const dialogRef = this.dialog.open(UploadCertifDialogComponent, {
    width: '700px',
    data: { id,
    userId:this.userId },
  });
  dialogRef.afterClosed().subscribe(res=>{
    this.loadCertif();
  })

 

}

loadCertif(){
  this.userCertifs = this.userData.certifs.filter(x => {
    return x.photoCertif == null;
  });
}

displayCertif(photo){
  const dialogRef = this.dialog.open(UserInfoDialogComponent, {
    width: '700px',
    data:photo ,
   
  });
}

}
