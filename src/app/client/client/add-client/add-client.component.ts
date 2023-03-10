import {Component, Input} from '@angular/core';
import {ClientService} from "../../client.service";
import {Client} from "../../client";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent {
  constructor(private service: ClientService) {
  }

  @Input() client !: Client

  id !:number;
  name !: string;
  typeOfWork !: string;
  mastersName !: string;

  ngOnInit() {
    this.id = this.client.id;
    this.name = this.client.name;
    this.typeOfWork = this.client.typeOfWork;
    this.mastersName = this.client.mastersName;
  }

  addButtonClick() {
    if (!(this.name === "" || this.typeOfWork == "" || this.mastersName == "")) {
      let c = {
        id: this.id,
        name: this.name,
        typeOfWork: this.typeOfWork,
        mastersName: this.mastersName
      }

      this.service.addClient(c).subscribe();
    } else {
      alert("Fill the data to add a client");
    }
  }

  updateButtonClick() {
    if (!(this.name === "" || this.typeOfWork == "" || this.mastersName == "")) {
      let c = {
        id: this.id,
        name: this.name,
        typeOfWork: this.typeOfWork,
        mastersName: this.mastersName
      }

      this.service.updateClient(c.id, c).subscribe();
    } else {
      alert("Fill the data to update a client");
    }
  }
}
