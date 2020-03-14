import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';

import { AuthService } from '../../Services/auth.service';
import { MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-ajout-session',
  templateUrl: './ajout-session.component.html',
  styleUrls: ['./ajout-session.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class AjoutSessionComponent implements OnInit {
  form: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  type: string;
  hide = true;



  constructor(  private formBuilder: FormBuilder,private authService: AuthService,private userService:UserService) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      cin : new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{8}')
      ]),
      nom : new FormControl(''),
      datenais : new FormControl('', [Validators.required]),
      duree : new FormControl('', [Validators.required]),


    },
   );

  }


get f() { return this.form.controls; }

public removeValidators(form: FormGroup) {
  for (const key in form.controls) {
    this.form.get(key).clearValidators();
    this.form.get(key).updateValueAndValidity();
  }
}

onSubmit() {

  this.userService.getuserByCin(this.form.controls.cin.value).subscribe(
    data => {
      console.log(data.user_id);
     // this.form.controls.cin.v=data.user_id;
      this.authService.registerSession(this.f,data.user_id).subscribe(
        data => {
          console.log("session saved");

        },
        err => {
   console.log('breaks here');
          // this.errorMessage = err.error.message;

         }
      );

    },
    err => {
console.log('breaks here');
      // this.errorMessage = err.error.message;
this.isSignUpFailed = true;
    }
  );



   this.form.reset();
  this.removeValidators(this.form);
 }

}
