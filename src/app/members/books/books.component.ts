import { Component, OnInit } from '@angular/core';
import { Book, BookArray } from 'src/app/shared/models/book';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  listBooks: Book[] = []
  constructor(private _bookService: BookService){}
  ngOnInit(): void {
    this._bookService.getAll().subscribe({
      next: (res) => {
        this.listBooks = res.results;
        console.log(this.listBooks);
        
        
        
      }
    })
  }
}
