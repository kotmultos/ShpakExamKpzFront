import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordComponent } from './record/record.component';
import { AddRecordComponent } from './record/add-record/add-record.component';
import {ClientModule} from "../client/client.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    RecordComponent,
    AddRecordComponent
  ],
  exports: [
    AddRecordComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class RecordModule { }
