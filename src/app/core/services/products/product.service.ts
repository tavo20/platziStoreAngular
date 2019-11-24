import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './../../../product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  constructor(
    private http: HttpClient
  ) { }

  getProductos() {
    return this.http.get<Product[]>('http://platzi-store.herokuapp.com/products/');
  }
  getProducto(id: string) {
    console.log(id);
    // return this.products.find(item => id === item.id);
    return this.http.get(` http://platzi-store.herokuapp.com/products/ ${id}`);
  }
}
