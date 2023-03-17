import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BookArray } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private _bookUrl = 'http://localhost:8080/api/book/'
  constructor(private _httpClient : HttpClient) { }

  getAll(): Observable<BookArray> {
    return this._httpClient.get<BookArray>(this._bookUrl)
  }
}
