import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../app/models/products/Products';

@Injectable({
  providedIn: 'root'
})
export class FakeProductService {
  fakeProductsUrl: string = '/assets/data/product.json';

  constructor(private http: HttpClient) { }

  getFakeProducts(): Observable<Product> {

    return this.http.get<Product>(this.fakeProductsUrl);

}
}
