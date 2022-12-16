import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientComponent} from "./client/client/client.component";
import {RecordComponent} from "./record/record/record.component";

const routes: Routes = [
  {
    path: "clients", component: ClientComponent
  },
  {
    path: "records", component: RecordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
