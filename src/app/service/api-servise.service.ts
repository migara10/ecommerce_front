import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiseService {
  public API_URL = isDevMode() ? "http://localhost:3000/" : ""



  constructor(private readonly http: HttpClient) { }

  registerUser() {
    console.log(this.API_URL)
  }
  getresponse(
    method: string,
    endpoint: string,
    postParams: {},
  ): Observable<any> {
    const url = `${this.API_URL}` + endpoint;
    return this.http.request(method, url, { body: postParams });
  }


}
