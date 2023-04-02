import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private _bookService: BookService){}
  imgPath: string = 'http://localhost:8080'
  deleteFromBag(id: number) {
    this.bag = this.bag.filter(b => {
      return b.id !== id ? b : null
    })
    this._bookService.addToBookList(this.bag)
    // console.log('dans le order',  this.bag);
    // this._bookService.BookToBought = this.bag
    this._bookService.inShoppingCart.next(this.bag.length)
    
  }
  bag: Book[] = []
  ngOnInit(): void {
    this._bookService.bookList.subscribe(
      (res) => {
        this.bag = res
      }
      
    )
      // this.bag = this._bookService.BookToBought
      // if (!this._bookService.clearTabBook) {
      //   this.bag = []
      // }
      
      
  }
  
}
