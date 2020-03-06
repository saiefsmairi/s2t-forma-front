import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeV2Component } from './home-v2/home-v2.component';
import { ChoixComponent } from './choix/choix.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {path: 'home', component: HomeComponent },
  {path: 'home2', component: HomeV2Component },
  {path: 'choix', component: ChoixComponent },
  {path: 'signin', component: SigninComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'signup/:id', component: SignupComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
