import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "./client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients() : Observable<Client[]> {
    return this.http.get<Client[]>("https://localhost:44376/api/Clients/get-all-clients");
  }

  addClient(c : Client)  {
    return this.http.post("https://localhost:44376/api/Clients/add-client", c);
  }

  updateClient(id : number, c : Client) {
    return this.http.put(`https://localhost:44376/api/Clients/update-client/${id}`, c);
  }

  deleteClient(id : number) {
    return this.http.delete(`https://localhost:44376/api/Clients/delete-client/${id}`);
  }

  findClientByName(name: string) : Observable<Client[]> {
    return this.http.get<any[]>(`https://localhost:44376/api/Clients/find-clients-by-name/${name}`);
  }
}
