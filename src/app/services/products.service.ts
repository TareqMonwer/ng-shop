import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsUrl: string = environment.apiUrl + '/shop/products/'
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.productsUrl)
  }
}
