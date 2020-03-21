import { Component, OnInit } from '@angular/core';


import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { TokenStorageService } from '../../Services/token-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: FormGroup;
  hide = true;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];


  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.router.navigateByUrl('dashboard');
    }

    this.form = this.formBuilder.group({
      cin: new FormControl('', [
        Validators.required,]),
      password:new FormControl('',[Validators.required]),
      });

  }
  get f() { return this.form.controls; }

  onSubmit() {

    this.authService.login(this.f).subscribe(

      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;

        this.reloadPage();
        this.router.navigate(['dashboard']);
      },
      err => {
        //this.errorMessage = err.error.message;

        this.isLoginFailed = true;
      }
    );
  }



  reloadPage() {
    window.location.reload();
  }





}

