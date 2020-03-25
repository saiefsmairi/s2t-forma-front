import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const TEST_API = 'http://localhost:9080/api/test/';
const params = new HttpParams();

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  params
};
@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(private http:HttpClient) { }


  



}
