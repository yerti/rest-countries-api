import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllDetailCountryComponent } from './page/all-detail-country/all-detail-country.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { SearchCountryComponent } from './shared/search-country/search-country.component';
import { DetailCountriComponent } from './page/detail-countri/detail-countri.component';

@NgModule({
  declarations: [
    AppComponent,
    AllDetailCountryComponent,
    HeaderComponent,
    SearchCountryComponent,
    DetailCountriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
