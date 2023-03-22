import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/shared/models/author';
import { AuthorService } from 'src/app/shared/services/author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  listAuthors: Author[] = []
  constructor(private _authorService: AuthorService) {}

  ngOnInit(): void {
    this._authorService.getAll().subscribe({
      next: (res) => {
        this.listAuthors = res.results
      }
    })
  }

}
