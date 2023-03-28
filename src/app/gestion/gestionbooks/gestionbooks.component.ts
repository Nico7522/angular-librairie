import { Component } from '@angular/core';
import { Event, Router } from '@angular/router';
import { AuthorsInfos, Book, BookArray } from 'src/app/shared/models/book';
import { BookService } from 'src/app/shared/services/book.service';
import { UpdatecoverService } from 'src/app/shared/services/updatecover.service';

@Component({
  selector: 'app-gestionbooks',
  templateUrl: './gestionbooks.component.html',
  styleUrls: ['./gestionbooks.component.scss'],
})
export class GestionbooksComponent {
  listBooks: Book[] = [];
 
  imgPath: string = 'http://localhost:8080';
  cover!: File 
  token! : string | null

  constructor(private _bookService: BookService, private _router: Router, private _updateCoverService: UpdatecoverService) {
   
  }
  ngOnInit(): void {

    this._bookService.getAll().subscribe({
      next: (res) => {
        this.listBooks = res.results
   
        
      },
    });
  }

  deleteBook(id: number): void {
    this._bookService.delete(id).subscribe({
      error: () => {

      },

      complete: () => {
        this._router.navigateByUrl('/gestion/gestionbooks')
        this._bookService.getAll().subscribe((res) => {this.listBooks = res.results} )
      }
    })
  }

  recupImg(e: any) {
    
    this.cover = e.target.files[0]
    console.log(this.cover);
  }

  updateCover(id: number){
    console.log(this.cover);
    
    this._updateCoverService.updateCover(id, this.cover).subscribe({
      next: (res) => {
        console.log(res);
        
      },
      error: (err) => {
        console.log(err);
        
      },
      complete: () => {
        window.location.reload()
        this._router.navigateByUrl('/gestion/gestionbooks')
      }
    })
  }

}
