import { IndexComponent } from './components/home/index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/accounts/login/login.component';
import { RegisterComponent } from './components/accounts/register/register.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
