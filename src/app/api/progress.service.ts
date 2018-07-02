import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  constructor(private _http: HttpClient) { }

  getElements() {

    return this._http.get("http://pb-api.herokuapp.com/bars");
  }

}
