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

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';

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
import { AjoutSessionComponent } from './components/ajout-session/ajout-session.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { AffectFormateurDialogComponent } from './components/affect-formateur-dialog/affect-formateur-dialog.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ListeSessionComponent } from './components/liste-session/liste-session.component';
import { AjoutRecuSessionDialogComponent } from './components/ajout-recu-session-dialog/ajout-recu-session-dialog.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { ReclamationComponent } from './components/reclamation/reclamation.component';
import {MatRadioModule} from '@angular/material/radio';
import { ListeReclamationComponent } from './components/liste-reclamation/liste-reclamation.component';



import { PhotoProfileDialogComponent } from './components/photo-profile-dialog/photo-profile-dialog.component';

import { GestionRecuComponent } from './components/gestion-recu/gestion-recu.component';
import { PhotoRecuDialogComponent } from './components/photo-recu-dialog/photo-recu-dialog.component';
import { SessionComponent } from './components/session/session.component';
import { AjoutSupportCoursDialogComponent } from './components/ajout-support-cours-dialog/ajout-support-cours-dialog.component';

import { PdfPreviewDialogComponent } from './components/pdf-preview-dialog/pdf-preview-dialog.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

import { RepondreReclamationGestDialogComponent } from './components/repondre-reclamation-gest-dialog/repondre-reclamation-gest-dialog.component';
import { ModifierUserByGestionnaireComponent } from './components/modifier-user-by-gestionnaire/modifier-user-by-gestionnaire.component';

import { GestionSessionsComponent } from './components/gestion-sessions/gestion-sessions.component';
import { CompletionDossierComponent } from './components/completion-dossier/completion-dossier.component';
import { UploadCertifDialogComponent } from './components/upload-certif-dialog/upload-certif-dialog.component';

import { ModifierPresenceParFormateurDialogComponent } from './components/modifier-presence-par-formateur-dialog/modifier-presence-par-formateur-dialog.component';
import { ListeAllUsersAdminComponent } from './components/liste-all-users-admin/liste-all-users-admin.component';
import { ModifSessionDialogComponent } from './components/modif-session-dialog/modif-session-dialog.component';




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
    Ng2SearchPipeModule,
    MatRadioModule,

    PdfViewerModule,
    NgxExtendedPdfViewerModule,



    MatCheckboxModule,

    MatSnackBarModule


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
    AjoutSessionComponent,
    AffectFormateurDialogComponent,
    ConfirmDialogComponent,
    AffectFormateurDialogComponent,
    ListeSessionComponent,
    AjoutRecuSessionDialogComponent,
    ChatbotComponent,
    ReclamationComponent,
    ListeReclamationComponent,
    PhotoProfileDialogComponent,

    GestionRecuComponent,
    PhotoRecuDialogComponent,
    SessionComponent,
    AjoutSupportCoursDialogComponent,
    PdfPreviewDialogComponent,


    RepondreReclamationGestDialogComponent,
    ModifierUserByGestionnaireComponent,

    GestionSessionsComponent,
    CompletionDossierComponent,
    UploadCertifDialogComponent,

    ModifierPresenceParFormateurDialogComponent,
    ListeAllUsersAdminComponent,
    ModifSessionDialogComponent,




  ],
  entryComponents : [
    CertifDialogComponent,
    UserInfoDialogComponent,
    AffectFormateurDialogComponent,
    ConfirmDialogComponent,
    PhotoProfileDialogComponent
  ],
  providers: [NotificationsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
