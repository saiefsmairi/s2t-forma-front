import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:9080/api/auth/';
const params = new HttpParams()
  .set('type', 'formateur');
let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  params
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user,type:string ): Observable<any> {
    let params = new HttpParams()
    .set('type', type);
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    params
  };
    return this.http.post(AUTH_API + 'signup', {

      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
