import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'app/Services/auth.service';

@Component({
  selector: 'app-ajout-gestionnaire',
  templateUrl: './ajout-gestionnaire.component.html',
  styleUrls: ['./ajout-gestionnaire.component.css']
})
export class AjoutGestionnaireComponent implements OnInit {

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
      nom : new FormControl('',[Validators.required]),
      prenom : new FormControl('',[Validators.required]),
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