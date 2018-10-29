import { IntroductionModule } from './features/introduction/introduction.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/containers/home/home.component';
import { LandingComponent } from './features/landing/containers/landing/landing.component';
import { SliderModule } from './features/slider/slider.module';
import { GalleryModule } from './features/gallery/gallery.module';
import { CoreModule } from './core/core.module';
import { BenefitsModule } from './features/benefits/benefits.module';
import { AboutModule } from './features/about/about.module';
import { ContactsModule } from './features/contacts/contacts.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    SliderModule,
    GalleryModule,
    BenefitsModule,
    AboutModule,
    ContactsModule,
    IntroductionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
