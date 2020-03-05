import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeV2Component } from './home-v2/home-v2.component';
import { ChoixComponent } from './choix/choix.component';
import { SigninComponent } from './signin/signin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeV2Component,
    ChoixComponent,
    SigninComponent,
    NavbarComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
