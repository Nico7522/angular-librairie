import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
  imgPath = "/shared/shopping/images/shopping-cart.png"
  imgPathUrl: string = 'http://localhost:4200'
  numToAdd!: number

  constructor(private _bookService: BookService){}

  ngOnInit(): void {
      this._bookService.inShoppingCart.subscribe({
        next: (res) => {
          this.numToAdd = res
        }
      })
  }

  clearCartShop(){
    this._bookService.add(0)
  }
}
