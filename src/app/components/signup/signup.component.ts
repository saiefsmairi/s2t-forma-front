import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
type:string;
private sub: any;
    constructor(private route: ActivatedRoute, private authService:AuthService) { }

    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.type = params['type'];

     });
    }

    onSubmit() {
      console.log(this.type);
       this.authService.register(this.form,this.type).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
           this.isSignUpFailed = false;
         },
       err => {
           this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
     }



}
