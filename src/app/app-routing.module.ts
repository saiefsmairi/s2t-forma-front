import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChoixComponent } from './choix/choix.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfilComponent } from './user-profil/user-profil.component';

import { SigninComponent } from './signin/signin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {path: 'home', component: HomeComponent },
  {path: 'choix', component: ChoixComponent },
  {path: 'signin', component: SigninComponent },
  {path: 'signup/:id', component: SignupComponent },

  {path: 'dashboard', component: DashboardComponent },
  {path: 'profil', component: UserProfilComponent },
  {path: 'Admindashboard', component: AdminDashboardComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
