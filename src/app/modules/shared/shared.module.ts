import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from 'src/app/components/shared/product-card/product-card.component';

@NgModule({
  declarations: [
    ProductCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ProductCardComponent,
  ]
})
export class SharedModule { }
