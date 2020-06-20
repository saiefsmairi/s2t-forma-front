import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:9080/api/auth/';
const params = new HttpParams();

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

      username: credentials.cin.value,
      password: credentials.password.value
    }, httpOptions);
  }



  registerFormateur(user): Observable<any> {
    console.log(user.listCertif.value);
  
    console.log(user.datenais.value);
    const params = new HttpParams();
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params
    };

    return this.http.post(AUTH_API + 'signup/formateur', {

      username: user.cin.value,
      nom: user.nom.value,
      prenom: user.prenom.value,
      email: user.email.value,
      password: user.password.value,
      datenais: user.datenais.value,
      numtel: user.tel.value,
      rib: user.rib.value,
      listCertif: user.listCertif.value
    }, httpOptions);
  }





  

  registerApprenant(user): Observable<any> {
    const params = new HttpParams();


    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params
    };

    return this.http.post(AUTH_API + 'signup/apprenant', {
      username: user.cin.value,
      nom: user.nom.value,
      prenom: user.prenom.value,
      email: user.email.value,
      password: user.password.value,
      datenais: user.datenais.value,
      numtel: user.tel.value,
    }, httpOptions);
  }



  registerSociete(user): Observable<any> {
    const params = new HttpParams();

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params
    };
    return this.http.post(AUTH_API + 'signup/societe', {
      username: user.cin.value,
      nom: user.nom.value,
      email: user.email.value,
      password: user.password.value,
      numtel: user.tel.value,
    }, httpOptions);
  }


  // registerSession(session, id): Observable<any> {
  //   const params = new HttpParams();
  //   httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  //     params
  //   };

  //   return this.http.post(AUTH_API + 'AjoutSession', {

  //     nom: session.nom.value,
  //     duree: session.duree.value,
  //     date: session.datenais.value,
  //     user_id: id,

  //   }, httpOptions);
  // }


}
