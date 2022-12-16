import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { AddClientComponent } from './client/add-client/add-client.component';



@NgModule({
  declarations: [
    ClientComponent,
    AddClientComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
