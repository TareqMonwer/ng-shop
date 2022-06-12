import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { ProductsSectionComponent } from './components/home/products-section/products-section.component';
import { IndexComponent } from './components/home/index.component';
import { SharedModule } from './modules/shared/shared.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AccountsModule } from './modules/accounts/accounts.module';
import { ProductsModule } from './modules/products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ProductsSectionComponent,
    IndexComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    AccountsModule,
    ProductsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
