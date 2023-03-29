import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
  // token = localStorage.getItem('token');
  token! : string | null
  numToAdd!: number

  constructor(private _bookService: BookService, private _authService : AuthService){}

  ngOnInit(): void {
      this._bookService.inShoppingCart.subscribe({
        next: (res) => {
          this.numToAdd = res
        }
      })
      this.token = this._authService.token
  }

  clearCartShop(){
    this._bookService.add(0)
    this._bookService.clearTabBook.next(!this._bookService.clearTabBook);
    location.reload();
  }
}
