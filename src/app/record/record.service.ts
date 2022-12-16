import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Record} from "./record";

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http: HttpClient) { }

  getAllRecords() : Observable<Record[]> {
    return this.http.get<Record[]>("https://localhost:44376/api/Records/get-all-records");
  }

  addRecord(r : Record)  {
    return this.http.post("https://localhost:44376/api/Records/add-record", r);
  }

  // updatePatient(id : number, pat : any) {
  //   return this.http.put(`https://localhost:44321/api/Patients/update-patient/${id}`, pat);
  // }
  //
  // deletePatient(id : number) {
  //   return this.http.delete(`https://localhost:44321/api/Patients/delete-patient/${id}`);
  // }
  //
  // findPatientByName(name: string) : Observable<any[]> {
  //   return this.http.get<any[]>(`https://localhost:44321/api/Patients/find-patient-by-name/${name}`);
  // }
}
