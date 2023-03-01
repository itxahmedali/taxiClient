import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { PromotionsComponent } from './pages/extras/promotions/promotions.component';
import { TermsAndPrivacyComponent } from './pages/extras/terms-and-privacy/terms-and-privacy.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  // { path: '/',   redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent,data: { animation: 'isRight'}},
  {path:'about',component:AboutComponent,data: { animation: 'isLeft'}},
  {path:'services',component:ServicesComponent,data: { animation: 'isRight'}},
  {path:'contact-us',component:ContactusComponent,data: { animation: 'isLeft'}},
  {path:'terms-and-condition',component:TermsAndPrivacyComponent,data: { animation: 'isRight'}},
  {path:'privacy-policy',component:TermsAndPrivacyComponent,data: { animation: 'isLeft'}},
  {path:'promotions',component:PromotionsComponent,data: { animation: 'isRight'}},
  { path: '**', component: HomeComponent,data: { animation: 'isLeft'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
