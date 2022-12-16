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
}
