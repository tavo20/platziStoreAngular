import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductService } from './../../../core/services/products/product.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  form: FormGroup;
  constructor(
   private formBuilder: FormBuilder,
   private productService: ProductService,
   private router: Router,
  ) {
    this.buildForm();
   }

  ngOnInit() {
  }
  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: ['', ],
      descripcion: ['', [Validators.required]],
    });
  }
  saveProduct(event: Event) {
    // event.preventDefault();
    console.log(this.form.value);
    if (this.form.valid) {
      const product = this.form.value;
      this.productService.createProduct(product)
        .subscribe((newProducto) => {
          console.log(newProducto);
          this.router.navigate(['./admin/products']);
        });
    }
  }

}
