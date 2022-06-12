import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { ProductsSectionComponent } from './components/home/products-section/products-section.component';
import { ProductCardComponent } from './components/common/product-card/product-card.component';
import { IndexComponent } from './components/home/index.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ProductsSectionComponent,
    ProductCardComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
