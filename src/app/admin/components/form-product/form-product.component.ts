import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductService } from './../../../core/services/products/product.service';
import { Router } from '@angular/router';
import { MyValidators } from './../../../utils/validators';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  form: FormGroup;
  image$: Observable<any>;
  constructor(
   private formBuilder: FormBuilder,
   private productService: ProductService,
   private router: Router,
   private angularFireStorage: AngularFireStorage
  ) {
    this.buildForm();
   }

  ngOnInit() {
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
  get priceField() {
    return this.form.get('price');
  }
  uploadfile(event) {
    console.log(event);
    const file = event.target.files[0];
    console.log(file);
    const dir = `images/${1234}`;
    const fileRef = this.angularFireStorage.ref(dir);
    const task = this.angularFireStorage.upload(dir, file);
    task.snapshotChanges()
      .pipe(
        tap(hola => console.log(hola)),
        finalize(() => {
          this.image$ = fileRef.getDownloadURL();
          this.image$.subscribe (url => {
            console.log(url);
            this.form.get('image').setValue(url);
          });
        })
      )
      .subscribe();
  }

}
