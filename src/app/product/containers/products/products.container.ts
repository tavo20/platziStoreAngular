import { Component, OnInit } from '@angular/core';
import {Product} from '../../../product.model';
import { ProductService } from '@core/services/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class ProductsContainer implements OnInit {
  products: Product[] = [];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
   const x =  this.productService.getProductos()
      .subscribe((productos) => {
        this.products = (productos);
        x.unsubscribe();
        console.log(productos);
      }, (err) => {console.error(`error al obtener los productos ${err}`)});
  }
  clickProduct(id: number) {
    console.log(`product ${id}`);
  }

}
