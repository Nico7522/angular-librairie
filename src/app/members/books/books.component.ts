import { Component, OnInit } from '@angular/core';
import { Book, BookArray } from 'src/app/shared/models/book';
import { BookService } from 'src/app/shared/services/book.service';
// import { DomSanitizer, SafeUrl} from '@angular/platform-browser';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  // img!: SafeUrl
  listBooks: Book[] = []
  imgPath: string = 'http://localhost:8080'
  constructor(private _bookService: BookService){
    
  }
  ngOnInit(): void {
    this._bookService.getAll().subscribe({
      next: (res) => {
        this.listBooks = res.results;
        console.log(this.listBooks);
        
        
        
        // this.img = this.sanitizer.bypassSecurityTrustResourceUrl(this.listBooks[0].cover);
      }
    })
  }
}
