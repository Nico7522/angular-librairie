import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthResult } from '../models/authResult';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _Url : string = "http://localhost:8080/api/user/login";
  isAdmin: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isconnected: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private _httpClient : HttpClient) {}
  connect(login: Login): Observable<AuthResult> {
    return this._httpClient.post<AuthResult>(this._Url, login)
    // this.isAdmin.next(false);
  }

  disconnect() {
    this.isAdmin.next(true);
  }
}
