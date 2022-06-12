import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'ecom-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.css']
})
export class ProductsSectionComponent implements OnInit {
  products: Product[] = [
    {
      'id': 1,
      'name': 'Apple Watch',
      'src': '/assets/images/products/apple-watch.jpg',
      'price': 100,
      'category': 'gadget',
      'categoryId': 1
    },
    {
      'id': 2,
      'name': 'Bang Loudspeaker',
      'src': '/assets/images/products/bang-loudspeaker.jpg',
      'price': 100,
      'category': 'gadget',
      'categoryId': 1
    },
    {
      'id': 3,
      'name': 'Carrot Bebop Drone',
      'src': '/assets/images/products/carrot-bebop-drone.jpg',
      'price': 100,
      'category': 'gadget',
      'categoryId': 1
    },
    {
      'id': 4,
      'name': 'Dolce & Gabanna Print Headphone',
      'src': '/assets/images/products/dolce-gabanna-print-headphones.jpeg',
      'price': 100,
      'category': 'gadget',
      'categoryId': 1
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
