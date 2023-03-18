import { Component, Input } from '@angular/core';
import { AuthorsInfos } from 'src/app/shared/models/book';

@Component({
  selector: 'app-listauthors',
  templateUrl: './listauthors.component.html',
  styleUrls: ['./listauthors.component.scss']
})
export class ListauthorsComponent {

  @Input() authors: AuthorsInfos[] = [];
}
