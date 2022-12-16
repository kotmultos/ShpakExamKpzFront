import {Component, Input} from '@angular/core';
import {RecordService} from "../../record.service";
import {Record} from "../../record";
import {Client} from "../../../client/client";

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent {
  constructor(private service: RecordService) {
  }

  @Input() record !: Record
  @Input() clients !: Client[]

  id !:number;
  time !: string;
  clientId !: number
  // name !: string;
  // typeOfWork !: string;
  // mastersName !: string;

  ngOnInit() {
    this.id = this.record.id;
    this.time = this.record.date;
    this.clientId = this.record.client.id;
    // this.name = this.record.client.name;
    // this.typeOfWork = this.record.client.typeOfWork;
    // this.mastersName = this.record.client.mastersName;
  }

  addButtonClick() {
    let r = {
      id: this.id,
      time: this.time,
      desiredId: this.clientId
    }

    this.service.addRecord(r).subscribe();
  }

  updateButtonClick() {

  }
}
