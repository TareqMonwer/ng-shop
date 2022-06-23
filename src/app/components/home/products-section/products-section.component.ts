import { ProductsService } from './../../../services/products.service';
import { Component } from '@angular/core';


@Component({
  selector: 'ecom-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.css']
})
export class ProductsSectionComponent {
  products$ = this.productsService.products$

  constructor(private productsService: ProductsService) { }
}
