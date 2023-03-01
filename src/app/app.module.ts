import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { TermsAndPrivacyComponent } from './pages/extras/terms-and-privacy/terms-and-privacy.component';
import { PromotionsComponent } from './pages/extras/promotions/promotions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './components/banner/banner.component';
import { PointComponent } from './components/point/point.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { NgwWowModule } from 'ngx-wow';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactusComponent,
    TermsAndPrivacyComponent,
    PromotionsComponent,
    BannerComponent,
    PointComponent,
    GetInTouchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
