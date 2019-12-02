import { Component, OnInit } from '@angular/core';
import { MyValidators } from './../../../utils/validators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductService } from './../../../core/services/products/product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  form: FormGroup;
  id: string;
  constructor(
   private formBuilder: FormBuilder,
   private productService: ProductService,
   private router: Router,
   private activeRoute: ActivatedRoute
  ) {
    this.buildForm();
   }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productService.getProducto(this.id)
        .subscribe((product) => {
          this.form.patchValue(product);
        });
    });
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.idPriceValid]],
      image: ['', ],
      descripcion: ['', [Validators.required]],
    });
  }
  saveProduct(event) {
    // event.preventDefault();
    console.log(this.form.value);
    if (this.form.valid) {
      const product = this.form.value;
      this.productService.updateProduct(this.id, product)
        .subscribe((newProducto) => {
          console.log(newProducto);
          this.router.navigate(['./admin/products']);
        });
    }
  }
  get priceField() {
    return this.form.get('price');
  }

}
