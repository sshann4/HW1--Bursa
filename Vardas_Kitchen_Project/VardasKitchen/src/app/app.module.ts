import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadOfPageComponent } from './head-of-page/head-of-page.component';
import { MainBodyOfPageComponent } from './main-body-of-page/main-body-of-page.component';
import { FooterOfPageComponent } from './footer-of-page/footer-of-page.component';
import { MostRecommendedComponent } from './most-recommended/most-recommended.component';
import { SideComponent } from './side/side.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadOfPageComponent,
    MainBodyOfPageComponent,
    FooterOfPageComponent,
    MostRecommendedComponent,
    SideComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
