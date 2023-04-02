import { Component, OnInit } from '@angular/core';
import { Book, BookArray } from 'src/app/shared/models/book';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  // img!: SafeUrl
  listBooks: Book[] = []
  BooksToBought: Book[] = []
  imgPath: string = 'http://localhost:8080'
  addToShoppingCart: number = 0
  token = localStorage.getItem('token')
  constructor(private _bookService: BookService){
    
  }
  addToCartShop(id: number): void{
    this.addToShoppingCart = this.addToShoppingCart+1
    this._bookService.add(this.addToShoppingCart);
   
    this.listBooks.map(book => {
      if (book.id === id) {
         this.BooksToBought.push(book)
      }
      
    })
    this._bookService.addToBookList(this.BooksToBought)
    
    
    
  }
  ngOnInit(): void {

    this._bookService.getAll().subscribe({
      next: (res) => {
        this.listBooks = res.results;
       
      }
  })
  this._bookService.inShoppingCart.subscribe({
    next: (res) => {
      this.addToShoppingCart = res
    }
  })
  console.log(this.token);
  
  }

}
