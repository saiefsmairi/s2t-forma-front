import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public location: Location) { }

  ngOnInit(): void {
  }
  isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path());

      if( titlee === '/home' ) {
          return true;
      } else {
          return false;
      }
  }

  isSignup() {
    var titlee = this.location.prepareExternalUrl(this.location.path());

      if( titlee === '/signup/apprenant' ||titlee === '/signup/formateur'||titlee === '/signup/societe') {
          return true;
      } else {
          return false;
      }
  }


  isChoix() {
    var titlee = this.location.prepareExternalUrl(this.location.path());

      if( titlee === '/choix' ) {
          return true;
      } else {
          return false;
      }
  }

  isSignin() {
    var titlee = this.location.prepareExternalUrl(this.location.path());

      if( titlee === '/signin' ) {
          return true;
      } else {
          return false;
      }
  }
}
