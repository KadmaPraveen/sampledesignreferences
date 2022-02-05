import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListpagesComponent } from './websitedesign/listpages/listpages.component';
import { MainpageComponent } from './cards/mainpage/mainpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ListpagesComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
