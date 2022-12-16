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

  ngOnInit() {
    this.id = this.record.id;
    this.time = this.record.date;
    this.clientId = this.record.client.id;
  }

  addButtonClick() {
    if(!(this.time == "" )) {
      let r = {
        time: this.time,
        desiredId: Number(this.clientId)
      }

      this.service.addRecord(r).subscribe();
    } else {
      alert("Fill the data to add a record");
    }
  }

  updateButtonClick() {
    if(!(this.time == "" )) {
      let r = {
        time: this.time,
        desiredId: Number(this.clientId)
      }

      this.service.updateRecord(this.id, r).subscribe();
    } else {
      alert("Fill the data to update a record");
    }
  }
}
