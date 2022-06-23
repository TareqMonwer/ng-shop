import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsUrl: string = environment.apiUrl + '/shop/products/'
  constructor(private http: HttpClient) { }

  products$ = this.http.get(this.productsUrl)
    .pipe(
      tap(products => console.log('Products:', products))
    )
}
