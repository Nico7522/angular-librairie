import { Component } from '@angular/core';
import { AuthorsInfos, Book, BookArray } from 'src/app/shared/models/book';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-gestionbooks',
  templateUrl: './gestionbooks.component.html',
  styleUrls: ['./gestionbooks.component.scss'],
})
export class GestionbooksComponent {
  listBooks: Book[] = [];
 
  imgPath: string = 'http://localhost:8080';
  constructor(private _bookService: BookService) {}
  ngOnInit(): void {
    this._bookService.getAll().subscribe({
      next: (res) => {
        this.listBooks = res.results
   
        
      },
    });
  }
}
