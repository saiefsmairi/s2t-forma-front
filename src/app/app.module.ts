import { NotificationsComponent } from './components/notifications/notifications.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChoixComponent } from './components/choix/choix.component';
import { HomeNavbarComponent } from './components/home-navbar/home-navbar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';


import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { CertifDialogComponent } from './components/certif-dialog/certif-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { SigninComponent } from './components/signin/signin.component';
import { AjoutGestionnaireComponent } from './components/ajout-gestionnaire/ajout-gestionnaire.component';
import { GestionUsersComponent } from './components/gestion-users/gestion-users.component';
import { UserInfoDialogComponent } from './components/user-info-dialog/user-info-dialog.component';
import { GestionSessionsComponent } from './components/gestion-sessions/gestion-sessions.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { AffectFormateurDialogComponent } from './components/affect-formateur-dialog/affect-formateur-dialog.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatButtonModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatTooltipModule,
    MatToolbarModule,
    NgbModule,
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
    MatDividerModule,
    MatMomentDateModule,
    NgxMaterialTimepickerModule,
    Ng2SearchPipeModule

  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    HomeComponent,
    HomeNavbarComponent,
    ChoixComponent,
    SignupComponent,
    CertifDialogComponent,
    SigninComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    AjoutGestionnaireComponent,
    GestionUsersComponent,
    UserInfoDialogComponent,
    GestionSessionsComponent,

    AffectFormateurDialogComponent,
    ConfirmDialogComponent

    AffectFormateurDialogComponent



  ],
  entryComponents :[
    CertifDialogComponent,
    UserInfoDialogComponent,
    AffectFormateurDialogComponent,
    ConfirmDialogComponent
  ],
  providers: [NotificationsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
