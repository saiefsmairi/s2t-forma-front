import { GestionUsersComponent } from './components/gestion-users/gestion-users.component';
import { AjoutGestionnaireComponent } from './components/ajout-gestionnaire/ajout-gestionnaire.component';
import { ChoixComponent } from './components/choix/choix.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'acceuil',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
  },
  {
    path: 'acceuil',
    component: HomeComponent,
  },
  {
    path:'choix',
    component:ChoixComponent
  },
  {
    path: 'signup/:id',
    component: SignupComponent
  },
  {path: 'signin',
   component: SigninComponent
   },
   {
     path:'ajout-gestionnaire',
     component:AjoutGestionnaireComponent
   },
   {
    path:'gestion-users',
    component:GestionUsersComponent
   }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
       useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
