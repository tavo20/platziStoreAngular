import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ExponencialPipe } from './pipes/exponencial/exponencial.pipe';
import { HoghlightDirective } from './directives/highlight/hoghlight.directive';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    ExponencialPipe,
    HoghlightDirective,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    ExponencialPipe,
    HoghlightDirective,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
