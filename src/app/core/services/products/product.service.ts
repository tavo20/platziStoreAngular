import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from './../../../product.model';
import { environment } from './../../../../environments/environment'
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry  } from 'rxjs/operators';
import * as Sentry from "@sentry/browser";


interface User {
  email: string;
  gender: string;
  phone: string;
}
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
  }
  getRandomUsers(): Observable<User[]> {
    return this.http.get('https://randomuser.me/apiasd/?results=2')
    .pipe(
      // catchError(error => {
      //   return throwError('ups algo salio mal');
      // }),
      retry(3),
      catchError(this.handleError),
      map((response: any) => response.results as User[])
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    //aca hacemos tranking de los errores.
    Sentry.captureException(error);
    return throwError('ups algo salio mal');
  }

  getFile() {
    return this.http.get('assets/files/test.txt', {responseType: 'text'});
  }


}
