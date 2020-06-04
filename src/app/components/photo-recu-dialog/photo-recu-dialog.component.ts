import { GestionnaireService } from 'app/Services/gestionnaire.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SessionService } from 'app/Services/session.service';

@Component({
  templateUrl: './photo-recu-dialog.component.html',
  styleUrls: ['./photo-recu-dialog.component.css']
})
export class PhotoRecuDialogComponent implements OnInit {
  retrievedImage:any;
  constructor(public dialogRef: MatDialogRef<PhotoRecuDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private gestionnaireService:GestionnaireService,
    private sessionService:SessionService) { }

  ngOnInit(): void {
  console.log(this.data.user_id);
    this.retrievedImage = 'data:image/jpeg;base64,' + this.data.photo;

  }

onOkClick(){

 this.gestionnaireService.verifierRecu(this.data.user_id,this.data.session_id,this.data.idRecu);


}
onCancelClick(){
  this.dialogRef.close();
}

}
