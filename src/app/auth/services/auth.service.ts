import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthResult } from '../models/authResult';
import { Login } from '../models/login';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _Url : string = "http://localhost:8080/api/user/";
  isConnected: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isAdmin: BehaviorSubject<boolean> = new BehaviorSubject(false);
  name: Observable<string> = new Observable<string>

  constructor(private _httpClient : HttpClient) {}
  connect(login: Login): Observable<AuthResult> {
    return this._httpClient.post<AuthResult>(this._Url+"login", login)
  
  }

  register(account: Register): Observable<AuthResult> {
    return this._httpClient.post<AuthResult>(this._Url+"auth", account)
  }

  disconnect(): void {
    localStorage.clear();
    this.isConnected.next(false);
    this.isAdmin.next(false);
  }

  loged(): void {
    this.isConnected.next(true);
  
  }

  admin(): void {
    this.isAdmin.next(true);
  }
}
