import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AuthorsInfos, Book, finalDataBook } from 'src/app/shared/models/book';
import { Categorie } from 'src/app/shared/models/categorie';
import { AuthorService } from 'src/app/shared/services/author.service';
import { BookService } from 'src/app/shared/services/book.service';
import { CategorieService } from 'src/app/shared/services/categorie.service';

@Component({
  selector: 'app-createbooks',
  templateUrl: './createbooks.component.html',
  styleUrls: ['./createbooks.component.scss'],
})
export class CreatebooksComponent implements OnInit {
  newBook: FormGroup;
  listBooks: Book[] = [];
  listAuthors!: any[];
  listAuthors2!: any[];
  authorsTab: any[] = [];
  data: any[] = [];
  finalData: finalDataBook = {
    title: '',
    price: 0,
    authors: [],
    categories: []
  };

  myAuthorsList: any[] = [];
  categorieList: Categorie[] = []
  cateTab: any[] = []
  addA(id: number): void {
    this.authorsTab.push({
      "id": id,
    });
  }
  
  constructor(
    private _fb: FormBuilder,
    private _bookService: BookService,
    private _authorService: AuthorService,
    private _categorieService: CategorieService,
    private _router: Router
    ) {
      this.newBook = this._fb.group({
        title: [null, Validators.required],
        price: [null, Validators.required],
        // authors: [null, Validators.required]
        authors: [] ,
        categories:[[]],
      });
    }
    
  
 

  addC(id: number): void {
    this.cateTab.push(
      id
    );
  }
  sendData() {
    this.finalData = {
      title: this.newBook.get('title')?.value,
      price: this.newBook.get('price')?.value,
      authors: this.authorsTab,
      categories: this.cateTab,
      
    };
  }



  ngOnInit(): void {
    this._bookService.getAll().subscribe({
      next: (res) => {
        this.listBooks = res.results;
      },
    });
    this._authorService.getAll().subscribe({
      next: (res) => {
        this.myAuthorsList = res.results;
      },
    });
    this._categorieService.getAll().subscribe({
      next: (res) => {
        this.categorieList = res.results     
      }
    })

  }

  createBook() {
    this.newBook.get('authors')?.setValue([{"id":this.newBook.get('authors')?.value[0] }])
    if (this.newBook.valid) {
      this._bookService.create(this.newBook.value).subscribe({
        next: (res) => {
        },

        complete: () => {
          this._router.navigateByUrl('/gestion/gestionbooks')
        }
      });
    }
  }

  DeleteA(id: number){
    this.authorsTab = this.authorsTab.filter(a => a.id != id)
  }

  DeleteC(id: number){
    this.cateTab = this.cateTab.filter(a => a != id)
  }
}
