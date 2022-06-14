import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'ecom-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.css']
})
export class ProductsSectionComponent implements OnInit {
  products: any;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe({
      next: response => {
        this.products = response;
        console.log(response);
      },
      error: error => console.log(error)
    })
  }
}
