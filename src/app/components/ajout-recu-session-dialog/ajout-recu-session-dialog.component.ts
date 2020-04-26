import { GestionnaireService } from 'app/Services/gestionnaire.service';
import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'app/Services/user.service';

@Component({
  selector: 'app-ajout-recu-session-dialog',
  templateUrl: './ajout-recu-session-dialog.component.html',
  styleUrls: ['./ajout-recu-session-dialog.component.css']
})
export class AjoutRecuSessionDialogComponent implements OnInit {
  changed: Boolean = false;
  imgURL: any;
  selectedFile: File;
  imagePath;
  Photo:any;
  date:Date;
  sessionId;
  prix;
  userId;
  constructor(public dialogRef: MatDialogRef<AjoutRecuSessionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    public dialog: MatDialog) {
      this.sessionId=data.sessionId;
      this.prix=data.prix;
      this.userId=data.userId;

     }

     ngOnInit(): void {
       this.date=new Date();
      console.log(this.sessionId);
      console.log(this.prix);
      console.log(this.userId);
        }
      
        public onFileChanged(event:any) {
    
          this.selectedFile = event.target.files[0];
          let reader = new FileReader();
          this.imagePath = event.target.files;
          reader.readAsDataURL(event.target.files[0]);
          reader.onload = _event => {
         
          this.Photo = reader.result;
      
      this.changed=true;
      
      
          };
        }
        onUpload() {

          console.log('1')
            const uploadImageData = new FormData();
           uploadImageData.append('imageFile', this.selectedFile,this.sessionId);
           uploadImageData.set('sessionId', this.sessionId);
           uploadImageData.set('userId', this.userId);
           
           uploadImageData.set('prix', this.prix);
           

            this.userService.ajoutRecu(uploadImageData);
         
          
       
       }
       

}
