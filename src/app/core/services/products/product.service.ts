import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './../../../product.model';
import { environment } from './../../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private http: HttpClient
  ) { }

  getProductos() {
    return this.http.get<Product[]>(environment.url_api);
  }
  getProducto(id: string) {
    console.log(id);
    // return this.products.find(item => id === item.id);
    return this.http.get<Product>(`${environment.url_api}${id}`);
  }
  createProduct(product: Product){
    return this.http.post(`${environment.url_api}`, product);
  }
  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.url_api}${id}`, changes);
  }
  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}${id}`);
  };

}
