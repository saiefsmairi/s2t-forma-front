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
export class UserService {


  constructor(private http: HttpClient) { }

  getuserByid(id): Observable<any> {
    const params = new HttpParams().set('id', id);

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params
    };
    return this.http.get(TEST_API + 'profil/'+id, httpOptions);

  }

  getAllUsers(): Observable<any> {
    const params = new HttpParams();
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),params
    };
    return this.http.get(TEST_API + 'GestionUsers', httpOptions);

  }

  update(user, id): Observable<any> {
    const params = new HttpParams().set('id', id);

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params
    };
    return this.http.put(
      TEST_API + 'profil',
      {

        nom: user.nom.value,
        prenom: user.prenom.value,
        email: user.email.value,
        cin: user.cin.value,
       // datenaissance: user.datenaissance.value,
        password2: user.passwordnew.value,
        password: user.passwordold.value,

      },
      httpOptions
    );

  }





}
