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

  ngOnInit() {
    this.GetAllClients();
  }

  private GetAllClients() {
    this.service.getAllClients().subscribe(d => this.clients = d);
  }
}
