import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Subject, combineLatest, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  productsUrl: string = environment.apiUrl + '/shop/products/'
  productSelectSubject = new Subject<number>();
  productSelectAction$ = this.productSelectSubject.asObservable();

  products$ = this.http.get<Product[]>(this.productsUrl)
    .pipe(
      tap(products => console.log('Products:', products))
  )

  // selectedProduct$ = combineLatest([
  //   this.products$,
  //   this.productSelectAction$
  // ]).pipe(
  //   tap(product => console.log(product, '--before take...')),
  //   map(([products, productId]) => 
  //     products.find(product => product.id === 1)
  //   ),
  //   tap(product => console.log(product, '--after take...'))
  // )

  getProduct(productId: number) : Observable<Product> {
    return this.products$.pipe(
      map(products => {
        return products.find(prod => prod.id === productId)
      }),
      tap(prod => console.log('product detail:', prod)),
    );
  }
}