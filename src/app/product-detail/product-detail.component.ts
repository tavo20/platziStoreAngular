import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { ProductService } from '../product.service';
import {Product} from './../product.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  producto: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      const id = params.id;
        this.producto = this.productService.getProducto(id)
       console.log(this.producto);
    });
  }

}
