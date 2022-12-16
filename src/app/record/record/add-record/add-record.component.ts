import {Component, Input} from '@angular/core';
import {RecordService} from "../../record.service";
import {Record} from "../../record";

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent {
  constructor(private service: RecordService) {
  }

  @Input() record !: Record

  id !:number;
  date !: string;
  name !: string;
  typeOfWork !: string;
  mastersName !: string;

  ngOnInit() {
    this.id = this.record.id;
    this.date = this.record.date;
    this.name = this.record.client.name;
    this.typeOfWork = this.record.client.typeOfWork;
    this.mastersName = this.record.client.mastersName;
  }

  addButtonClick() {
    let r = {
      id: this.id,
      date: this.date,
      client: {
        id: 0,
        name: this.name,
        typeOfWork: this.typeOfWork,
        mastersName: this.mastersName
      }
    }

    this.service.addRecord(r).subscribe();
  }

  updateButtonClick() {

  }
}
