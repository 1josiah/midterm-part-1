import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { FngAccordionComponent } from './fng-accordion/fng-accordion.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { PortfolioLightboxComponent } from './portfolio-lightbox/portfolio-lightbox.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { ResumeEducationComponent } from './resume-education/resume-education.component';
import { ResumeFooterComponent } from './resume-footer/resume-footer.component';
import { ResumeProfileComponent } from './resume-profile/resume-profile.component';
import { ResumeWorkExperienceComponent } from './resume-work-experience/resume-work-experience.component';

import { LightboxModule } from 'ngx-lightbox';

import {
  AccordionModule,
  AlertModule,        // Foundation Callouts
  ButtonsModule,
  CarouselModule,     // Foundation Orbit
  CollapseModule,
  BsDatepickerModule,
  BsDropdownModule,   // Foundation Dropdown Menus and Dropdown Panes
  ModalModule,        // Foundation Reveal
  OffcanvasModule,
  PaginationModule,
  ProgressbarModule,
  RatingModule,
  SortableModule,
  TabsModule,
  TimepickerModule,
  TooltipModule,
  TypeaheadModule,
} from 'ngx-foundation';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    FngAccordionComponent,
    GraphicDesignComponent,
    PortfolioLightboxComponent,
    MyResumeComponent,
    ResumeEducationComponent,
    ResumeFooterComponent,
    ResumeProfileComponent,
    ResumeWorkExperienceComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [CartService]
})
export class AppModule { }



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/