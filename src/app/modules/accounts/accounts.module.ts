import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../components/accounts/login/login.component';
import { RegisterComponent } from '../../components/accounts/register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class AccountsModule { }
