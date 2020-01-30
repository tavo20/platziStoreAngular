import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { ProductService } from '../../../core/services/products/product.service';
import {Product} from '../../../product.model';
import { switchMap } from 'rxjs/operators';
import {  Observable } from 'rxjs';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  producto$: Observable<Product>;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  
  ) { }

  ngOnInit() {
   this.producto$ =  this.route.params
    .pipe(
      switchMap((params: Params) => {
        return  this.productService.getProducto(params.id);
      })
    );
    // .subscribe((product) => {
      // clase 12 profesional
       // this.producto = product;

      // console.log(params);
      // const id = params.id;
      // this.fetchProduct(id);
    // });
  }
  // Lo comentamos en la clase 12 del profesional
  // fetchProduct(id: string) {
  //   this.productService.getProducto(id)
  //     .subscribe((producto) => {
  //       console.log(producto);
  //       this.producto = producto;
  //     }, (err) => {console.error(`errro al obtener la información del producto ${err}`)});
  // }
  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'Producto desde angular',
      image: 'assets/images/pin.png',
      price: 35000,
      description: 'Nuevo producto'
    };
    this.productService.createProduct(newProduct)
      .subscribe(() => {

      },(err) => {console.error(`error al guardar el producto`)});
  }
  updateProduct(){
    const updateProduct: Partial<Product> = {
      price: 8888888,
      description: 'Edición Product'
    };
    this.productService.updateProduct('222', updateProduct)
      .subscribe(() => {

      },(err) => {console.error(`error al guardar el producto`)});
  }
  deleteProduct() {
    this.productService.deleteProduct('222')
      .subscribe(() => {

      },(err) => {console.error(`èrror al borrar el producto ${err}`)})

  }

  getRandomUsers() {
    this.productService.getRandomUsers()
      .subscribe(users => {
        console.log(users);
      }, (err) => {
          console.error(err);
      });
  }

  getFile() {
    this.productService.getFile()
      .subscribe((content) => {
        console.log(content);
      });
  }
   
  // getFileReto() {
  //   var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
  //   FileSaver.saveAs(blob, "hello world.txt");
  // }


}
