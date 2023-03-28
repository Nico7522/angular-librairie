import { Component, OnInit } from '@angular/core';
import { Book, BookArray } from 'src/app/shared/models/book';
import { BookService } from 'src/app/shared/services/book.service';
// import { DomSanitizer, SafeUrl} from '@angular/platform-browser';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  // img!: SafeUrl
  listBooks: Book[] = []
  imgPath: string = 'http://localhost:8080'
  addToShoppingCart: number = 0
  constructor(private _bookService: BookService){
    
  }
  addToCartShop(){
    this.addToShoppingCart = this.addToShoppingCart+1
    this._bookService.add(this.addToShoppingCart);
    console.log(this.addToShoppingCart);
    
  }
  ngOnInit(): void {
    this._bookService.getAll().subscribe({
      next: (res) => {
        this.listBooks = res.results;
        console.log(this.listBooks);
      }
  })
  this._bookService.inShoppingCart.subscribe({
    next: (res) => {
      this.addToShoppingCart = res
    }
  })
  }
  
}
