import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-updatebooks',
  templateUrl: './updatebooks.component.html',
  styleUrls: ['./updatebooks.component.scss']
})
export class UpdatebooksComponent implements OnInit {
  updateBookForm: FormGroup
  bookId!: number
  constructor(private _fb: FormBuilder, private _bookService: BookService, private _activeRoute: ActivatedRoute, private _router: Router) {
    this.updateBookForm = this._fb.group({
      title: [null, Validators.required],
      price: [null, Validators.required],
      authorsId: [null]
    })
    this.bookId = parseInt(this._activeRoute.snapshot.params['id']);

  }

  updateBook(): void {
    if (this.updateBookForm.valid) {
      this._bookService.update(this.bookId, this.updateBookForm.value).subscribe({
        error: (err) => {
          console.log(err);
          
        },

        complete: () => {
          this._router.navigateByUrl('/gestion/gestionbooks')
        }
      })
    }
  }

  ngOnInit(): void {
    this._bookService.getById(this.bookId).subscribe({
      next: (res) => {
        this.updateBookForm.patchValue({
          title: res.result.title,
          price: res.result.price,
          authorsId:
          
          res.result.authors.map(e =>
          e.id
        )
        })
      }
    })
  }

}
