import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordComponent } from './record/record.component';
import { AddRecordComponent } from './record/add-record/add-record.component';



@NgModule({
  declarations: [
    RecordComponent,
    AddRecordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecordModule { }
