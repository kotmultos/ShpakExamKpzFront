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
  clients !: Client[]
  isButtonClicked !: boolean
  record !: Record
  findWord !: string

  ngOnInit() {
    this.GetAllClients();
    this.GetAllRecords();
  }

  private GetAllRecords() {
    this.service.getAllRecords().subscribe(d => this.records = d);
  }

  private GetAllClients() {
    this.service.getAllClients().subscribe(d => this.clients = d);
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

  update(r: Record) {
    this.record = r;
    this.isButtonClicked = true;
  }

  delete(r: Record) {
    this.service.deleteRecord(r.id).subscribe(d => this.GetAllRecords());
  }

  find() {
    if(this.findWord === "" || this.findWord === undefined) {
      this.GetAllClients();
    } else {
      this.service.findRecordByName(this.findWord).subscribe(d => this.records = d);
    }
  }
}
