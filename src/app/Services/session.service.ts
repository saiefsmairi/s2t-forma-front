import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const SESSION_API = 'http://localhost:9080/api/sessions/';
const params = new HttpParams();

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  params
};
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  getAllSessions(): Observable<any> {
    const params = new HttpParams();

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params
    };
    return this.http.get(SESSION_API + 'sessions', httpOptions);

  }

  getAllSessionsPerFormateur(id): Observable<any> {
    const params = new HttpParams().set('id', id);

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params
    };
    return this.http.get(SESSION_API + 'sessions_perUser/'+id, httpOptions);

  }
}
