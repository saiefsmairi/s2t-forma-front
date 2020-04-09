import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const TEST_API = 'http://localhost:9080/api/users/';
const MAIL_API = 'http://localhost:9080/api/test/';
const NOTIF_API = 'http://localhost:9080/api/notif/';


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

  update(user, id): Observable<any> {
    console.log(user.datenais.value);
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
        datenais: user.datenais.value,
        tel:user.tel.value
      },
      httpOptions
    );

  }

  // getuserByCin(cin): Observable<any> {
  //   const params = new HttpParams().set('cin', cin);

  //   httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  //     params
  //   };
  //   return this.http.get(TEST_API + 'AjoutSession/'+cin, httpOptions);

  // }

  SendMail(nom,prenom,email): Observable<any> {
    const params = new HttpParams();
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params
    };

    return this.http.post(MAIL_API + 'sendmail', {

      nom: nom,
      prenom: prenom,
      email:email,
      

    }, httpOptions);
  }

   sendnotif(id,notif): Observable<any> {
    const params = new HttpParams();
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params
    };

    return this.http.post(NOTIF_API + 'ajout-notif', {

      user_id: id,
      notif_id: notif
    }, httpOptions);
  }

  getlisteNotifByuser(id): Observable<any> {
    const params = new HttpParams().set('id', id);

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params
    };
    return this.http.get(NOTIF_API + 'liste_notif/'+id, httpOptions);

  }
  
  passwordChange(user, id): Observable<any> {
    console.log('passchange');
    console.log( user.passwordold.value);
    const params = new HttpParams().set('id', id);

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params
    };
    return this.http.put(
      TEST_API + 'password',
      {
        oldPassword: user.passwordold.value,
        newPassword: user.passwordnew.value,
      },
      httpOptions
    );

  }

  

}



