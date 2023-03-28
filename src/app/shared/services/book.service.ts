import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book, BookArray, BookResult, finalDataBook } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  numToAdd!: number
  inShoppingCart: BehaviorSubject<number> = new BehaviorSubject(0);
  private _bookUrl = 'http://localhost:8080/api/book/'
  constructor(private _httpClient : HttpClient) { }

  getAll(): Observable<BookArray> {
    return this._httpClient.get<BookArray>(this._bookUrl)
  }

  getById(id: number): Observable<BookResult> {
    return this._httpClient.get<BookResult>(this._bookUrl+id)
  }

  create(bookToCreate: finalDataBook): Observable<BookArray> {
    return this._httpClient.post<BookArray>(this._bookUrl, bookToCreate)
  }

  update(id: number, bookToUpdate: Book): Observable<any> {
    return this._httpClient.put<any>(this._bookUrl+id, bookToUpdate)
  }

  delete(id : number): Observable<any> {
    return this._httpClient.delete<any>(this._bookUrl+id)
  }

  add(val: number) {
     this.inShoppingCart.next(val)   
  }
}


