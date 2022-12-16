import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Record} from "./record";
import {Client} from "../client/client";

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http: HttpClient) { }

  getAllClients() : Observable<Client[]> {
    return this.http.get<Client[]>("https://localhost:44376/api/Clients/get-all-clients");
  }

  getAllRecords() : Observable<Record[]> {
    return this.http.get<Record[]>("https://localhost:44376/api/Records/get-all-records");
  }

  addRecord(h : any)  {
    return this.http.post("https://localhost:44376/api/Records/add-record", h);
  }

  updateRecord(id : number, h : any) {
    return this.http.put(`https://localhost:44376/api/Records/update-record/${id}`, h);
  }

  deleteRecord(id : number) {
    return this.http.delete(`https://localhost:44376/api/Records/delete-record/${id}`);
  }

  findRecordByName(name: string) : Observable<Record[]> {
    return this.http.get<any[]>(`https://localhost:44376/api/Records/find-records-by-name/${name}`);
  }
}
