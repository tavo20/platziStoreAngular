import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { LayouComponent } from './components/layou/layou.component';


const routes: Routes = [
  {
    path: '',
    component: LayouComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule {}