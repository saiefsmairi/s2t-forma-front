import { NotificationsComponent } from './../notifications/notifications.component';
import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../Services/user.service';
declare var $: any;

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
import { GlobalService } from 'app/Services/global.service';
import { MatDialog } from '@angular/material/dialog';
import { PhotoProfileDialogComponent } from '../photo-profile-dialog/photo-profile-dialog.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class UserProfileComponent implements OnInit {
  listCertif: any;
userData: any;
userCertifs: any;
  selectedFile: File;
  imgURLs: Array<any>;
  message: string;
  i: any;
  imagePath;
  userObject: any;
  cin: any;
  nom: any;
  prenom: any;
  email: any;
  tel: any;
  id: any;
  USER_KEY = 'auth-user';
  role: any;
  roleName: any;
  form: FormGroup;
  Passwordform: FormGroup;
  hide = true;
  photoProfil:any;
  photo:any;


  constructor(private httpClient: HttpClient,
              private formBuilder: FormBuilder,
              private userService: UserService,
              private globalSrv: GlobalService,
              public dialog: MatDialog,
              public notif:NotificationsComponent
             ) {
              this.globalSrv.itemValue.subscribe((nextValue) => {
                console.log("changed");
                this.userObject = nextValue;
                this.cin = this.userObject.cin;
                this.nom = this.userObject.nom;
                this.prenom = this.userObject.prenom;
                this.email = this.userObject.email;
                this.tel = this.userObject.num_tel;
                this.id = this.userObject.user_id;
                this.role = this.userObject.roles;
                this.photoProfil = 'data:image/jpeg;base64,' + this.userObject.photoProfil;

             })
             }


  ngOnInit(): void {



  this.userData = JSON.parse(sessionStorage.getItem('auth-user'));
  this.listCertif = this.userData.certifs;
  this.userCertifs = this.userData.certifs.filter(x => {
    return x.photoCertif == null;
  });
    this.imgURLs = new Array();
    this.userObject = JSON.parse(sessionStorage.getItem('auth-user'));
    this.cin = this.userObject.cin;
    this.nom = this.userObject.nom;
    this.prenom = this.userObject.prenom;
    this.email = this.userObject.email;
    this.tel = this.userObject.num_tel;
    this.id = this.userObject.user_id;
    this.role = this.userObject.roles;
    this.photoProfil = 'data:image/jpeg;base64,' + this.userObject.photoProfil;


    if (
      this.role[0].name === 'ROLE_FORMATEUR' ||
      this.role === 'ROLE_FORMATEUR' ||
      this.role[0].name === 'ROLE_SOCIETE' || this.role === 'ROLE_SOCIETE'
    ) {
      this.roleName = 'formateur/societe';
    } else if (
      this.role[0].name === 'ROLE_APPRENANT' ||
      this.role === 'ROLE_APPRENANT'
    ) {
      this.roleName = 'apprenant';
    }

    this.form = this.formBuilder.group({
      cin: new FormControl(this.cin, [
        Validators.required,
        Validators.pattern('[0-9]{8}')
      ]),
      email: new FormControl(this.email, [
        Validators.required,
        Validators.email
      ]),

      nom: new FormControl(this.nom, [Validators.required]),


      prenom: new FormControl(this.prenom, [Validators.required]),
      tel: new FormControl(this.tel, [
        Validators.required,
        Validators.pattern('[0-9]{8}')
      ])
    });

this.Passwordform = this.formBuilder.group({
  passwordnew: new FormControl('', [Validators.required]),
  passwordold: new FormControl('', [Validators.required]),
})


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

  onUpload(id: string) {
    console.log(id);
    console.log(this.selectedFile);
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, id);
    uploadImageData.set('id', id);
    console.log(uploadImageData);
    this.httpClient
      .post('http://localhost:9080/api/users/profil', uploadImageData)
      .subscribe(response => {
        console.log(response.toString());
        const res = this.userService.getuserByid(this.id);
      console.log(this.id);
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


  }
  get f() {
    return this.form.controls;
  }
  get passwordform() {
    return this.Passwordform.controls;
  }
  onSubmit() {
    this.userService.update(this.f, this.id).subscribe(
      data => {
        console.log(data);
        this.role = this.userObject.roles;
        console.log(this.role[0]);
        const res = this.userService.getuserByid(this.id);
        res.subscribe(
          data1 => {
            sessionStorage.setItem(this.USER_KEY, JSON.stringify(data1));
            this.globalSrv.theItem = data1;
            console.log(data1);
          },
          err => {
            console.log('breaks here getuserbyid');
             this.message = err.error.message;
          }
        );
    
      },
      err => {
        console.log('breaks here');
      }
    );

  }

  reloadPage() {
    window.location.reload();
  }



onPasswordchange() {
  this.userService.passwordChange(this.passwordform, this.id).subscribe(
    data => {
      console.log(data);
      this.role = this.userObject.roles;
      console.log(this.role[0]);
      const res = this.userService.getuserByid(this.id);
      res.subscribe(
        data1 => {
        
        },
        err => {
          console.log('breaks here getuserbyid');
           this.message = err.error.message;
        }
      );


    },
    err => {

      console.log('breaks here');
    }
  );
}



openDialog() {

  const dialogRef = this.dialog.open(PhotoProfileDialogComponent, {
    width: '350px',
    data: { id:this.id,
    oldPhoto:this.photoProfil },
  });

dialogRef.afterClosed().subscribe(result => {
  if(result!=null){
    console.log(result);
    this.userObject.photoProfil = result;
    this.globalSrv.theItem = this.userObject;
    this.notif.showNotification('top','right','success','Photo Modifiée avec succées ')
  }


});

}

}
