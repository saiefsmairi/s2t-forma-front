import { Component, OnInit } from "@angular/core";
import { AuthService } from "../Services/auth.service";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { MustMatch } from "../Helpers/MustMatch";

@Component({
  selector: "app-user-profil",
  templateUrl: "./user-profil.component.html",
  styleUrls: ["./user-profil.component.css"]
})
export class UserProfilComponent implements OnInit {
  userObject: any;
  cin: any;
  nom: any;
  prenom: any;
  email: any;
  tel: any;
  datenaissance: any;
  id: any;
  USER_KEY = "auth-user";

  role: any;
  roleName: any;
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}
  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.userObject = JSON.parse(sessionStorage.getItem("auth-user"));
    this.cin = this.userObject.cin;
    this.nom = this.userObject.nom;
    this.prenom = this.userObject.prenom;
    this.email = this.userObject.email;
    this.tel = this.userObject.num_tel;
    this.datenaissance = this.userObject.date_naissance;
    this.id = this.userObject.user_id;
    this.role = this.userObject.roles;
    console.log(this.id);
    console.log(this.role);

    if (( this.role[0].name == "ROLE_FORMATEUR" ||this.role == "ROLE_FORMATEUR"    ) ||(this.role[0].name == "ROLE_SOCIETE" ||this.role == "ROLE_SOCIETE")){
      this.roleName = "formateur/societe";
    }

    else if( this.role[0].name == "ROLE_APPRENANT" ||this.role == "ROLE_APPRENANT"    ){
      this.roleName = "apprenant";

    }



    this.form = this.formBuilder.group({
      cin: new FormControl(this.cin, [
        Validators.required,
        Validators.pattern("[0-9]{8}")
      ]),
      email: new FormControl(this.email, [
        Validators.required,
        Validators.email
      ]),

      nom: new FormControl(this.nom),
      passwordnew: new FormControl(""),
      passwordold: new FormControl(""),

      prenom: new FormControl(this.prenom),
      datenais: new FormControl(this.datenaissance),
      tel: new FormControl(this.tel, [
        Validators.required,
        Validators.pattern("[0-9]{8}")
      ])
    });
  }

  onSubmit() {
    this.authService.update(this.f, this.id).subscribe(
      data => {
        console.log(data);
        this.role = this.userObject.roles;
        console.log(this.role[0]);
        let res = this.authService.getuserByid(this.id);
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
