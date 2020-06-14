import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const FORMATEUR_API = 'http://localhost:9080/api/formateur/';
const REGISTRE_API = 'http://localhost:9080/api/register/';

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



 getUserSessions(id): Observable<any>{

  const params = new HttpParams().set('id', id);

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params
    };
    return this.http.get(FORMATEUR_API + 'dashboard-formateur/'+id, httpOptions);
    
}

public ajoutRegistre(session_id:any,user_id :any,etat:any,date:any): Observable<any> {
  
  const params = new HttpParams();
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),params
  };
  return this.http.post(REGISTRE_API + 'ajout-registre',{
    user_id:user_id,
    session_id:session_id,
    date:date,
    etat:etat,
  

  }, httpOptions);

}

getRegistrePerUserPerDate(id,date): Observable<any> {
  const params = new HttpParams().set('id', id).set('date',date);
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    params
  };
  return this.http.get(REGISTRE_API  + 'registrePerUser/'+id, httpOptions);

}

updatepresence(id,etat): Observable<any> {
  const params = new HttpParams().set('id', id);
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    params
  };
  return this.http.put(
    REGISTRE_API  + 'update-etat-presence',
    {
      etat: etat,
    },
    httpOptions
  );

}
TauxAbsence(user_id,session_id): Observable<any> {
  const params = new HttpParams().set('user_id', user_id).set('session_id',session_id);
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    params
  };
  return this.http.get(REGISTRE_API  + 'tauxAbsence/', httpOptions);

}

tauxAbsencePourStats(session_id: any): Observable<any> {
  // tslint:disable-next-line: no-shadowed-variable
  const params = new HttpParams().set('session_id', session_id);

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    params
  };
  return this.http.get(REGISTRE_API + 'tauxAbsencePourStats/' , httpOptions);

}
getRegistreReport(format,session_id): Observable<any> {
  const params = new HttpParams().set('format', format).set('session_id',session_id);
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    params
  };
  return this.http.get(REGISTRE_API  + 'registreReport/', httpOptions);

}
}
