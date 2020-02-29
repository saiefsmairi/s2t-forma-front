import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { SignupFormateurComponent } from './signup-formateur/signup-formateur.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { ChoixTypeUserComponent } from './choix-type-user/choix-type-user.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'choix',   component: ChoixTypeUserComponent },
    { path: 'signup/Apprenant',   component: SignupComponent },
    { path: 'signup/Formateur',   component: SignupComponent },
    { path: 'signup/Societe',  component: SignupComponent },
    { path: 'signin',  component: SignInComponent },

    //those not needed for now
    { path: 'signupFormateur',  component: SignupFormateurComponent },
    { path: 'dash',  component: DashboardComponent },
    { path: 'landing',          component: LandingComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
