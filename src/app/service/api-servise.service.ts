import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiseService {
  private API_URL = isDevMode()? "http://localhost:3000":""

  

  constructor() { }

  registerUser() {
    console.log(this.API_URL)
  }
  

}
