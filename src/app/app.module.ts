import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { TripPackagesComponent } from './components/trip-packages/trip-packages.component';
import { GallaryComponent } from './components/gallary/gallary.component';
import { NewsLetterComponent } from './components/news-letter/news-letter.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    DestinationsComponent,
    TripPackagesComponent,
    GallaryComponent,
    NewsLetterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
