import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import {RecordModule} from "../record/record.module";
import {FormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        ClientComponent,
        AddClientComponent
    ],
    exports: [
        AddClientComponent
    ],
  imports: [
    CommonModule,
    RecordModule,
    FormsModule
  ]
})
export class ClientModule { }
