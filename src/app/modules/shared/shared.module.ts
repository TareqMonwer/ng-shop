import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from 'src/app/components/shared/product-card/product-card.component';
import { ShortenProductNamePipe } from 'src/app/pipes/shorten-product-name.pipe';

@NgModule({
  declarations: [
    ProductCardComponent,
    ShortenProductNamePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ProductCardComponent,
    ShortenProductNamePipe,
  ]
})
export class SharedModule { }
