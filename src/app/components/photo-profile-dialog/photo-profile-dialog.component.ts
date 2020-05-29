import { UserService } from './../../Services/user.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './photo-profile-dialog.component.html',
  styleUrls: ['./photo-profile-dialog.component.css'],
})
export class PhotoProfileDialogComponent implements OnInit {
  changed: Boolean = false;
  imgURL: any;
  selectedFile: File;
  imagePath;
  message:string;
  userObject: any;
  Photo:any;
  newPhoto:any;
  constructor(
    private userService:UserService,
    public dialogRef: MatDialogRef<PhotoProfileDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit(): void {
    this.Photo=this.data.oldPhoto;
   // this.userObject=JSON.parse(sessionStorage.getItem('auth-user'));
    console.log(this.data)
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
    uploadImageData.append('imageFile', this.selectedFile,this.data.id);
    uploadImageData.set('id', this.data.id);
     this.userService.ajoutModifPhotoProfil(uploadImageData);
  
    this.Photo= this.Photo.replace('data:image/jpeg;base64,','');
    this.Photo=  this.Photo.replace('data:image/png;base64,','');
      this.dialogRef.close(this.Photo);
}

}
