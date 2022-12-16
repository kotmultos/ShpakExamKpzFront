import { Component } from '@angular/core';
import {ClientService} from "../client.service";
import {Client} from "../client";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {

  constructor(private service: ClientService) {
  }

  clients !: Client[]
  isButtonClicked !: boolean
  client !: Client
  findWord !: string

  ngOnInit() {
    this.GetAllClients();
  }

  private GetAllClients() {
    this.service.getAllClients().subscribe(d => this.clients = d);
  }

  add() {
    this.client = {
      id: 0,
      name: "",
      typeOfWork: "",
      mastersName: ""
    }

    this.isButtonClicked = true;
  }

  close() {
    this.isButtonClicked = false;
    this.GetAllClients();
  }

  update(c: Client) {
    this.client = c;
    this.isButtonClicked = true;
  }

  delete(c: Client) {
    this.service.deleteClient(c.id).subscribe(d => this.GetAllClients());
  }

  findByWord() {
    if(this.findWord === "" || this.findWord === undefined) {
      this.GetAllClients();
    } else {
      this.service.findClientByName(this.findWord).subscribe(d => this.clients = d);
    }
  }
}
