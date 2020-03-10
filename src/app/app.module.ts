import { CertifDialogComponent } from './certif-dialog/certif-dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ChoixComponent } from './choix/choix.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavDashboardComponent } from './sidenav-dashboard/sidenav-dashboard.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import { ModifCertifDialogComponent } from './modif-certif-dialog/modif-certif-dialog.component';
import {MatDividerModule} from '@angular/material/divider';

import { SigninComponent } from './signin/signin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChoixComponent,
    SigninComponent,
    NavbarComponent,
    SignupComponent,
    DashboardComponent,
    SidenavDashboardComponent,
    UserProfilComponent,
    CertifDialogComponent,

    ModifCertifDialogComponent,
    AdminDashboardComponent,
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatDividerModule





  ],
  entryComponents :[
    CertifDialogComponent,
    ModifCertifDialogComponent

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
