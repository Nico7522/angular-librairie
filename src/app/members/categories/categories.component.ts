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

  imgPath: string = 'http://localhost:8080'
  listCategorie: Categorie[] = [];
  listBook: Book[] = [];
  listToShow: any[] = [];
  constructor(private _categorieService: CategorieService, private _bookService: BookService) {

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
