import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Bookmark } from './../models/bookmark.model'
import * as BookmarkActions from './../actions/bookmark.actions';

@Component({
  selector: 'app-bookmark-add',
  templateUrl: './bookmark-add.component.html',
  styleUrls: ['./bookmark-add.component.scss']
})

export class BookmarkAddComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addBookmark(name: string, url: string, group: number) {
    this.store.dispatch(new BookmarkActions.AddBookmark({ name: name, url: url, group: group }))
  }

  ngOnInit() {
  }

}
