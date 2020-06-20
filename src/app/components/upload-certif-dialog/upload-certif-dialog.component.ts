import { UserService } from 'app/Services/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { GestionnaireService } from 'app/Services/gestionnaire.service';


@Component({
  templateUrl: './upload-certif-dialog.component.html',
  styleUrls: ['./upload-certif-dialog.component.css']
})
export class UploadCertifDialogComponent implements OnInit {
  selectedFile: File;
  imgURLs: Array<any>;
  imagePath;
  USER_KEY = 'auth-user';
  message:any;
  constructor(public dialogRef: MatDialogRef<UploadCertifDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public userService:UserService,
    private httpClient: HttpClient,private gestionnaireService:GestionnaireService
    ) { }

  ngOnInit(): void {
    this.imgURLs = new Array();
  }

  public onFileChanged(event, i: any) {
    console.log(i);
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    this.imagePath = event.target.files;
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = _event => {
      this.imgURLs[i] = reader.result;
    };
  }



  onUpload() {
   
    console.log(this.selectedFile);
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile,this.data.id);
    uploadImageData.set('id', this.data.id);
    console.log(uploadImageData);
    this.httpClient
      .post('http://localhost:9080/api/users/profil', uploadImageData)
      .subscribe(response => {
        console.log(response.toString());
        const res = this.userService.getuserByid(this.data.userId);
      
        res.subscribe(
          data => {

            sessionStorage.setItem(this.USER_KEY, JSON.stringify(data));

            console.log(data);
          },
          err => {
            console.log('breaks here getuserbyid');
            this.message = err.error.message;
          }
        );
      });
      let res3 = this.gestionnaireService.getAllGestionnaire()
      res3.subscribe(
        data => {
        console.log(data);
          data.forEach(element => {
               this.userService.sendnotif(element.user_id,5).subscribe(data=>{
        console.log('gest notified');
      
      });
          });
    
        },
        err => {
    
          console.log("breaks here getalformateurs");
          // this.errorMessage = err.error.message;
        }
      );

  }


}
