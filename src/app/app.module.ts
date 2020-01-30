import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {ProductComponent} from './product/components/product/product.component';
import { CartComponent } from './cart/cart.component';

// import { ProductsComponent } from './product/components/products/products.component';
// import { ContactComponent } from './contact/components/contact/contact.component';
// import { DemoComponent } from './demo/components/demo/demo.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ProductDetailComponent } from './product/components/product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment} from './../environments/environment';
import * as Sentry from "@sentry/browser";
import { saveAs } from 'file-saver';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

Sentry.init({
  dsn: "https://a4e18476f667451eb0e00673e3003700@sentry.io/1878670"
});
@NgModule({
  declarations: [
    AppComponent,
    // ProductComponent,
    CartComponent,
    // ProductsComponent,
    // ContactComponent,
    // DemoComponent,
    PageNotFoundComponent,
    // ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
