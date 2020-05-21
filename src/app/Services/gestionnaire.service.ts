import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const TEST_API = 'http://localhost:9080/api/gestionnaire/';
const params = new HttpParams();

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  params
};




@Injectable({
  providedIn: 'root'
})
export class GestionnaireService {

  constructor(private http : HttpClient) { }


 public getAllUsers(): Observable<any> {
    const params = new HttpParams();
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),params
    };
    return this.http.get(TEST_API + 'gestion-users', httpOptions);

  }

  validerCompte(id): Observable<any> {
    const params = new HttpParams().set('id', id);

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),

      params
    };
    return this.http.put(
      TEST_API + 'gestion-users',{
        
      },
      httpOptions
    );

  }

  SupprimerUsers(id): Observable<any> {
    const params = new HttpParams().set('id', id);

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),

      params
    };
    return this.http.delete(
      TEST_API + 'gestion-users',
      httpOptions
    );

  }

  update(user, id,key): Observable<any> {
    var email1;
    var cin1;
    console.log(user[key].value);
              if((key=='cin'||key=='email')||(key=='cin'&&key=='email')){
                email1=user['email'].value;
               cin1=user['cin'].value;
              }
              else {
                email1=user.email.value;
                cin1=user.cin.value;
              }

              console.log(email1);
              console.log(cin1);
    const params = new HttpParams().set('id', id);

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params
    };
    return this.http.put(
      TEST_API + 'update-users-profil',
      {
  
        nom: user.nom.value,
        prenom: user.prenom.value,
        email: email1,
        cin: cin1,
      //  datenais: user.datenais.value,
        tel:user.tel.value
      },
      httpOptions
    );

  }


  public getAllFormateurs(): Observable<any> {
    const params = new HttpParams();
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),params
    };
    return this.http.get(TEST_API + 'affectation-formateur', httpOptions);

  }

  public getAllReclamations(): Observable<any> {
    const params = new HttpParams();
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),params
    };
    return this.http.get(TEST_API + 'liste-reclamations', httpOptions);

  }


  public ajoutSession(session:any,formateur_id :any): Observable<any> {
    const params = new HttpParams();
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),params
    };
    return this.http.post(TEST_API + 'ajout-session',{
      theme:session.theme.value,
      date_debut:session.dateDebut.value,
      date_fin:session.dateFin.value,
      heure_debut:session.heureDebut.value,
      heure_fin:session.heureFin.value,
      prix:session.prix.value,
      nbApprenant:session.nbApprenant.value,
      formateur_id:formateur_id

    }, httpOptions);

  }



}
