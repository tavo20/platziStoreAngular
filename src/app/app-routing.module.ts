import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {ProductComponent} from './product/components/product/product.component';
// import {HomeComponent} from './home/components/home/home.component';
import {ProductsComponent} from './product/components/products/products.component';
// import {ContactComponent} from './contact/components/contact/contact.component';
// import {DemoComponent} from './demo/components/demo/demo.component';
// import {BannerComponent} from './home/components/banner/banner.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProductDetailComponent} from './product/components/product-detail/product-detail.component';
import {LayoutComponent} from './layout/layout.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        // component: ProductsComponent
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)

      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      // {
      //   path: 'products/:id',
      //   component: ProductDetailComponent
      // }, 
    ]
  },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
