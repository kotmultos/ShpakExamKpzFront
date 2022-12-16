import { Component } from '@angular/core';
import {Client} from "../../client/client";
import {RecordService} from "../record.service";
import {Record} from "../record";

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent {

  constructor(private service: RecordService) {
  }

  records !: Record[]

  ngOnInit() {
    this.GetAllRecords();
  }

  private GetAllRecords() {
    this.service.getAllRecords().subscribe(d => this.records = d);
  }
}
