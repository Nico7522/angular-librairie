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
  bag: Book[] = []
  deleteFromBag(id: number) {
    this.bag = this.bag.filter(b => {
      return b.id !== id ? b : null
    })
    
    console.log('dans le order',  this.bag);
    this._bookService.BookToBought = this.bag
    this._bookService.inShoppingCart.next(this.bag.length)
   
  }
  ngOnInit(): void {
      this.bag = this._bookService.BookToBought
      if (!this._bookService.clearTabBook) {
        this.bag = []
      }
      
  }
  
}
