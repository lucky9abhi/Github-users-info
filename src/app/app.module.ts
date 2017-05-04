import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { GitusersComponent } from './gitusers/gitusers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SupportComponent } from './support/support.component';
import {GithubService} from "./services/github.service";
import {MdButtonModule, MdCheckboxModule} from "@angular/material";
import 'hammerjs';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'gitusers', component:GitusersComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'feedback', component:FeedbackComponent},
  {path: 'support', component:SupportComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    GitusersComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    FeedbackComponent,
    SupportComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MdButtonModule,
    MdCheckboxModule,
    BrowserAnimationsModule,
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
