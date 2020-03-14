import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ChoixComponent } from './Components/choix/choix.component';
import { SignupComponent } from './Components/signup/signup.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { UserProfilComponent } from './Components/user-profil/user-profil.component';

import { SigninComponent } from './Components/signin/signin.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { GestionUsersGestionnaireComponent } from './Components/gestion-users-gestionnaire/gestion-users-gestionnaire.component';
import { AjoutSessionComponent } from './Components/ajout-session/ajout-session.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {path: 'home', component: HomeComponent },
  {path: 'choix', component: ChoixComponent },
  {path: 'signin', component: SigninComponent },
  {path: 'signup/:id', component: SignupComponent },

  {path: 'dashboard', component: DashboardComponent },
  {path: 'profil', component: UserProfilComponent },
  {path: 'Admindashboard', component: AdminDashboardComponent },
  {path: 'GestionUsers', component: GestionUsersGestionnaireComponent },
  {path: 'AjoutSession', component: AjoutSessionComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
