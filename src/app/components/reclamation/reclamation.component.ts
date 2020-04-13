import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from 'app/Services/user.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  form: FormGroup;
  nom;
  email;
  user_id;

  constructor(private fb: FormBuilder,private userService:    UserService) { 

    this.form=fb.group({
      details:new FormControl('',[Validators.required]),
      typecheck:new FormControl('',[Validators.required])
          });

  }

  ngOnInit(): void {
    this.nom=JSON.parse(sessionStorage.getItem('auth-user')).nom;
    this.email=JSON.parse(sessionStorage.getItem('auth-user')).email;
    this.user_id=JSON.parse(sessionStorage.getItem('auth-user')).user_id;


  }
  get f(){return this.form.controls}
  public removeValidators(form: FormGroup) {
    for (const key in form.controls) {
      this.form.get(key).clearValidators();
      this.form.get(key).updateValueAndValidity();
    }
  }

  onFormSubmit(){
    this.userService.ajoutReclamation(this.f,this.user_id).subscribe(data=>{
      console.log('recla posted');
      
    });
    this.form.reset();
    this.removeValidators(this.form);


    

  }

 

}
