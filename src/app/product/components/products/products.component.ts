import { Component, OnInit } from '@angular/core';
import {Product} from '../../../product.model';
import { ProductService } from 'src/app/core/services/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
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
