import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiseService {
  public API_URL = isDevMode() ? "http://192.168.8.145:3000/" : ""
  private url = 'https://reqres.in/api/users';
  // private url = 'https://jsonplaceholder.typicode.com/todos';



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
  getUsers(page: number){
    return this.http.get(this.url + '?page=' + page);
  }


}
