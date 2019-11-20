import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './components/product.component';
// import {HomeComponent} from './home/components/home/home.component';
import {ProductsComponent} from './products/products.component';
import {ContactComponent} from './contact/contact.component';
import {DemoComponent} from './demo/demo.component';
// import {BannerComponent} from './home/components/banner/banner.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {LayoutComponent} from './layout/layout.component';


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
        component: ProductsComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent
      }, 
    ]
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  // {
  //   path: 'banner',
  //   component: BannerComponent
  // },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
