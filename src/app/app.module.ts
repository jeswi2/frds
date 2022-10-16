import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddfriendsComponent } from './addfriends/addfriends.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewfriendsComponent } from './viewfriends/viewfriends.component';

const appRoutes:Routes=[
  {
    path:"",component:AddfriendsComponent
  },
  {
    path:"view",component:ViewfriendsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddfriendsComponent,
    ViewfriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
