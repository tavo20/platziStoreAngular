import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExponencialPipe } from './pipes/exponencial/exponencial.pipe';
import { HoghlightDirective } from './directives/highlight/hoghlight.directive';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

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
  ]
})
export class SharedModule { }
