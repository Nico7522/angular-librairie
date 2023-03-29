import { Component } from '@angular/core';
import { Book } from 'src/app/shared/models/book';
import { Categorie } from 'src/app/shared/models/categorie';
import { BookService } from 'src/app/shared/services/book.service';
import { CategorieService } from 'src/app/shared/services/categorie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  addToShoppingCart: number = 0
  imgPath: string = 'http://localhost:8080'
  listCategorie: Categorie[] = [];
  listBook: Book[] = [];
  listToShow: any[] = [];
  token = localStorage.getItem('token')
  constructor(private _categorieService: CategorieService, private _bookService: BookService) {

  }

  addToCartShop(id: number){
    this.addToShoppingCart = this.addToShoppingCart+1
    this._bookService.add(this.addToShoppingCart);
   
    this.listToShow.map(book => {
      if (book.id === id) {
        this._bookService.addToList(book)
      }
    })
  
    
    
  }

  ngOnInit(): void {
      this._categorieService.getAll().subscribe({
        next: (res) => {
          this.listCategorie = res.results
        }
      })

      this._bookService.getAll().subscribe({
        next: (res) => {
          this.listBook = res.results
        }
      })

      this._bookService.inShoppingCart.subscribe({
        next: (res) => {
          this.addToShoppingCart = res
        }
      })

  }

  selectCategorie(id: number){
    console.log(id);
    this.listToShow = []
  this.listBook.forEach(book => book.categories.filter(cate => {
    if(cate.id === id){
      this.listToShow.map(b => {
        if (b === book) {
          this.listToShow.pop()
        }
      })
      this.listToShow.push(book)
    }
    return
  } ))

    console.log(this.listToShow);
    
  }
}
