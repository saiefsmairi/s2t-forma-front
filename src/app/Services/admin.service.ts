import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:9080/api/admin/';
const params = new HttpParams();

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  params
};
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  registerGest(user): Observable<any> {
    const params = new HttpParams();

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params
    };

    return this.http.post(AUTH_API + 'ajout-gestionnaire', {


      username: user.cin.value,
      nom: user.nom.value,
      prenom: user.prenom.value,
      email: user.email.value,
      password: user.password.value,
      datenais: user.datenais.value,
      numtel: user.tel.value,
    }, httpOptions);
  }

}

