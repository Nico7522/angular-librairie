import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorArray } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private _authorUrl = 'http://localhost:8080/api/author'

  constructor(private _httpClient: HttpClient) { }

  getAll(): Observable<AuthorArray> {
    return this._httpClient.get<AuthorArray>(this._authorUrl)
  }
}
