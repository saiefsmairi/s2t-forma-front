import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {
  userData: any = JSON.parse(sessionStorage.getItem('auth-user'));
  userCertifs = this.userData.certifs.filter(x => {
    return x.photoCertif == null;
  });
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
  datenaissance: any;
  id: any;
  USER_KEY = 'auth-user';
  role: any;
  roleName: any;
  form: FormGroup;

  constructor(private httpClient: HttpClient,
              private formBuilder: FormBuilder,
              private userService: UserService) {}

  ngOnInit(): void {
    this.imgURLs = new Array();
    this.userObject = JSON.parse(sessionStorage.getItem('auth-user'));
    this.cin = this.userObject.cin;
    this.nom = this.userObject.nom;
    this.prenom = this.userObject.prenom;
    this.email = this.userObject.email;
    this.tel = this.userObject.num_tel;
    this.datenaissance = this.userObject.date_nais;
    this.id = this.userObject.id;
    this.role = this.userObject.roles;
    console.log(this.id);
    console.log(this.role);

    if (
      this.role[0].name ==='ROLE_FORMATEUR' ||
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

      nom: new FormControl(this.nom),
      passwordnew: new FormControl(''),
      passwordold: new FormControl(''),

      prenom: new FormControl(this.prenom),
      datenais: new FormControl(this.datenaissance),
      tel: new FormControl(this.tel, [
        Validators.required,
        Validators.pattern('[0-9]{8}')
      ])
    });

  }

  public onFileChanged(event, i: any) {
    console.log(i);
    // Select File
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
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
      .post('http://localhost:9080/api/test/profil', uploadImageData)
      .subscribe(response => {
        console.log(response.toString());
        let res = this.userService.getuserByid(this.id);
        res.subscribe(
          data => {
            sessionStorage.setItem(this.USER_KEY, JSON.stringify(data));

            console.log(data);
          },
          err => {
            console.log("breaks here getuserbyid");
            // this.errorMessage = err.error.message;
          }
        );
      });
      this.reloadPage();
  }
  get f() {
    return this.form.controls;
  }
  onSubmit() {
    this.userService.update(this.f, this.id).subscribe(
      data => {
        console.log(data);
        this.role = this.userObject.roles;
        console.log(this.role[0]);
        let res = this.userService.getuserByid(this.id);
        res.subscribe(
          data => {
            sessionStorage.setItem(this.USER_KEY, JSON.stringify(data));

            console.log(data);
          },
          err => {
            console.log("breaks here getuserbyid");
            // this.errorMessage = err.error.message;
          }
        );
      },
      err => {
        console.log("breaks here");
      }
    );
      this.reloadPage();
  }

  reloadPage() {
    window.location.reload();
  }




}
