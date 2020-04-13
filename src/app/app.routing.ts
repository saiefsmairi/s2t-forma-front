import { GestionSessionsComponent } from './components/gestion-sessions/gestion-sessions.component';
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
import { ListeSessionComponent } from './components/liste-session/liste-session.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { ReclamationComponent } from './components/reclamation/reclamation.component';

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
    path:'gestion-utilisateurs',
    component:GestionUsersComponent
   },
   {
    path:'gestion-sessions',
    component:GestionSessionsComponent
   }
   ,
   {
    path:'liste-sessions',
    component:ListeSessionComponent
   },
   {
    path:'reclamation',
    component:ReclamationComponent
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
