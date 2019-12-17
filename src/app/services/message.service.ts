import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // tslint:disable-next-line: variable-name
  constructor( private _http: HttpClient ) { }

  sendMessage(body) {
    // const puerto = process.env.PORT || 3000;
    // return this._http.post(`:3000/formulario`, body);
    return this._http.post(`http://localhost:3000/formulario`, body);
  }
}

