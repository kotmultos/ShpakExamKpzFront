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
}
