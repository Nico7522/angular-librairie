import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/shared/models/book';
import { Categorie } from 'src/app/shared/models/categorie';
import { BookService } from 'src/app/shared/services/book.service';
import { CategorieService } from 'src/app/shared/services/categorie.service';

@Component({
  selector: 'app-gestioncategories',
  templateUrl: './gestioncategories.component.html',
  styleUrls: ['./gestioncategories.component.scss']
})
export class GestioncategoriesComponent implements OnInit {
  errorMessage: string = ''
  successMessage: string = ''
  input: string =''
  cateToCreate = { name : ""};
  createNewCate: boolean = false;
  imgPath: string = 'http://localhost:8080'
  listCategorie: Categorie[] = [];
  listBook: Book[] = [];
  listToShow: any[] = [];
  constructor(private _categorieService: CategorieService, private _bookService: BookService, private _router: Router) {

  }

  addCategorie(): void {
    this.createNewCate = !this.createNewCate
  }

  sendData(): void {
    this.errorMessage = '';
    this.successMessage = '';
    this.cateToCreate = {
      name: this.input
    }
    console.log(this.cateToCreate);
    
    this._categorieService.create(this.cateToCreate).subscribe({
      next: (res) => {

      },
      error: (err) => {
        if (this.cateToCreate.name === '') {
          return this.errorMessage = "A error has occurred, try again"
         }
        if (err.error.message.includes('Categorie')) {
          return this.errorMessage = err.error.message
        } 
        
      
      },

      complete: () => {
        this.successMessage
        this.successMessage= 'Categorie has been created';
        this.input = '';
        this._router.navigateByUrl('/gestion/gestioncategories')
        setTimeout(() => {
          
          window.location.reload();
        }, 2000);
      }
    })

  }

  deleteCate(id: number) : void {
    this._categorieService.delete(id).subscribe({
      error: () => {

        window.location.reload();
      },
      complete: () => {
        
        // this._router.navigateByUrl('/gestion/gestioncategories')
        this._categorieService.getAll().subscribe((res) => {this.listCategorie = res.results} )
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
