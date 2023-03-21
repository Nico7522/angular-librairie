import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AuthorsInfos, Book, finalDataBook } from 'src/app/shared/models/book';
import { AuthorService } from 'src/app/shared/services/author.service';
import { BookService } from 'src/app/shared/services/book.service';

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
  };

  myAuthorsList: any[] = [];

  constructor(
    private _fb: FormBuilder,
    private _bookService: BookService,
    private _authorService: AuthorService
  ) {
    this.newBook = this._fb.group({
      title: [null, Validators.required],
      price: [null, Validators.required],
      // authors: [null, Validators.required]
    });
  }

  addA(id: number): void {
    this.authorsTab.push({
      id,
    });
  }
  sendData() {
    this.finalData = {
      title: this.newBook.get('title')?.value,
      price: this.newBook.get('price')?.value,
      authors: this.authorsTab,
    };
  }

  // removeAuthors(id: number) {
  //   this.authors.removeAt(id);
  // }

  ngOnInit(): void {
    this._bookService.getAll().subscribe({
      next: (res) => {
        this.listBooks = res.results;
        console.log(this.listBooks);
        // this.listAuthors = this.listBooks.map((a) => a.authors);
        // console.log(this.listAuthors);
        // this.listAuthors2 = this.listAuthors.map((autheur) => autheur[0]);
        // console.log(this.listAuthors2);
      },
    });
    this._authorService.getAll().subscribe({
      next: (res) => {
        this.myAuthorsList = res.results;
        console.log(this.myAuthorsList);
      },
    });
  }

  createBook() {
    if (this.newBook.valid) {
      this._bookService.create(this.finalData).subscribe({
        next: (res) => {
          console.log(res);
        },
      });
    }
  }
}
