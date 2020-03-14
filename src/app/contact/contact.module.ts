import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
// import { ContactComponent } from './components/contact/contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { MaterialModule } from './../material/material.module';
import { ListComponent } from './components/list/list.component';
import { LayouComponent } from './components/layou/layou.component';


@NgModule({
    declarations: [
        // ContactComponent
        ListComponent,
        LayouComponent
    ],
    imports: [
        ContactRoutingModule,
        CommonModule,
        SharedModule,
        MaterialModule,
        FormsModule
    ]

    
})
export class ContactModule {

}