import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {
userData: any = JSON.parse(sessionStorage.getItem('auth-user'));
userCertifs=this.userData.certifs.filter((x)=>{return x.photoCertif!=null});
selectedFile: File;
imgURLs: Array<any>;
message: string;
i:any;
imagePath;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.imgURLs=new Array();

  }

  public onFileChanged(event,i:any) {
    console.log(i);
    //Select File
    this.selectedFile = event.target.files[0];


    var reader = new FileReader();
    this.imagePath = event.target.files;
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.imgURLs[i]=  reader.result;

    }
  }



  onUpload(id:string) {


    console.log(id);
    console.log(this.selectedFile);


    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, id);
    uploadImageData.set('id',id);
  console.log(uploadImageData);

     this.httpClient.post('http://localhost:9080/api/test/profil', uploadImageData)
       .subscribe((response) => {
        console.log(response.toString());
       }
       );


  }


}
