import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

import { ProductComponent } from './components/product/product.component';
import { ProductsContainer } from './containers/products/products.container';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from './../material/material.module';

@NgModule({
    declarations: [
        ProductComponent,
        ProductsContainer,
        ProductDetailComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ProductRoutingModule,
        MaterialModule
    ]
})
export class ProductModule {

}