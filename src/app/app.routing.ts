import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { SignupComponent } from './components/signup/signup.component';

import { SignInComponent } from './components/sign-in/sign-in.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { ChoixTypeUserComponent } from './components/choix-type-user/choix-type-user.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },

    { path: 'choix',   component: ChoixTypeUserComponent },
    { path: 'signup/:type',  component: SignupComponent },
    { path: 'signin',  component: SignInComponent },

    //those not needed for now

    { path: 'dash',  component: DashboardComponent },

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
