import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private baseURL= 'https://api.dialogflow.com/v1/query?v=20150910';
  private token = '959734a77e0d47d18b90a3f8f8ef854e';
  sessionId = Math.random().toString(36).slice(-5);

  constructor(private http: Http){}

  public sendMessage1(message:string){
    let data = {
      lang: 'fr',
      query : message,
      sessionId: this.sessionId
    }
    let headers = new Headers();
    headers.append('Authorization','Bearer '+this.token);
    return this.http.post(this.baseURL,data,{headers:headers}).map(res=>{
     return  res.json();
    });
 
    
  }
}


