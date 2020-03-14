import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { QuicklinkModule } from 'ngx-quicklink';


import { ExponencialPipe } from './pipes/exponencial/exponencial.pipe';
import { HoghlightDirective } from './directives/highlight/hoghlight.directive';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './../material/material.module';
import { FibonacciPipe } from './pipes/fibonacci.pipe';

@NgModule({
  declarations: [
    ExponencialPipe,
    HoghlightDirective,
    HeaderComponent,
    FooterComponent,
    FibonacciPipe
  ],
  exports: [
    ExponencialPipe,
    HoghlightDirective,
    HeaderComponent,
    FooterComponent,
    FibonacciPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    QuicklinkModule
  ]
})
export class SharedModule { }
