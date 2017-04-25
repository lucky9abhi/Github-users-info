import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { CircularComponent } from './circular/circular.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SupportComponent } from './support/support.component';
import {GithubService} from "./services/github.service";


const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'circular', component:CircularComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'feedback', component:FeedbackComponent},
  {path: 'support', component:SupportComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    CircularComponent,
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
