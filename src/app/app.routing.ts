import { CompletionDossierComponent } from './components/completion-dossier/completion-dossier.component';

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
import { ListeReclamationComponent } from './components/liste-reclamation/liste-reclamation.component';
import { GestionRecuComponent } from './components/gestion-recu/gestion-recu.component';
import { SessionComponent } from './components/session/session.component';
import { AjoutSessionComponent } from './components/ajout-session/ajout-session.component';
import { GestionSessionsComponent } from './components/gestion-sessions/gestion-sessions.component';

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
    path:'ajout-session',
    component:AjoutSessionComponent
   },
   {
    path:'gestion-sessions',
    component:GestionSessionsComponent
   },
   {
    path:'liste-sessions',
    component:ListeSessionComponent
   },
   {
    path:'reclamation',
    component:ReclamationComponent
   },
   {
    path:'liste-reclamations',
    component:ListeReclamationComponent
   },
   {
    path:'gestion-recu',
    component:GestionRecuComponent
   },
   {
    path:'session/:id',
    component:SessionComponent
   },
   {
     path:'completion-dossier',
     component:CompletionDossierComponent
   }
  
  


   
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
