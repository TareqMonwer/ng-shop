import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'ecom-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productId = Number(productId);
  }
}
