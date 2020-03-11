import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { MustMatch } from '../Helpers/MustMatch';
import { AuthService } from '../Services/auth.service';
import { MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class AdminDashboardComponent implements OnInit {
  form: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  type: string;
  hide = true;



  constructor(    private formBuilder: FormBuilder,private authService: AuthService,

    ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      email : new FormControl('', [Validators.required, Validators.email]),
      cin : new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{8}')
      ]),
      nom : new FormControl(''),
      prenom : new FormControl(''),
      datenais : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required]),
      tel : new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{8}')
      ]),

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
  console.log(this.type);
  console.log(this.form);
  this.authService.registerGest(this.f).subscribe(
     data => {
       console.log(data);
       this.isSuccessful = true;
       this.isSignUpFailed = false;
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
