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
  isButtonClicked !: boolean
  record !: Record

  ngOnInit() {
    this.GetAllRecords();
  }

  private GetAllRecords() {
    this.service.getAllRecords().subscribe(d => this.records = d);
  }

  add() {
    this.record = {
      id: 0,
      date: "",
      client: {
        id: 0,
        name: "",
        typeOfWork: "",
        mastersName: ""
      }
    }

    this.isButtonClicked = true;
  }

  close() {
    this.isButtonClicked = false;
    this.GetAllRecords();
  }
}
