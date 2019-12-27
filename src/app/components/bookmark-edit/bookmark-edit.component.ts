import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Bookmark } from '../../models/bookmark.model';
import { AppState } from '../../app.state';
import * as BookmarkActions from '../../actions/bookmark.actions';

import { Groups } from './../../groups'
import { GROUPS } from './../../mock-groups'

@Component({
  selector: 'app-bookmark-edit',
  templateUrl: './bookmark-edit.component.html',
  styleUrls: ['./bookmark-edit.component.scss']
})

export class BookmarkEditComponent implements OnInit {

  groups = GROUPS

  bookmarks: Observable<Bookmark[]>

  constructor(private store: Store<AppState>) {
    this.bookmarks = store.select('bookmark')
  }

  removeBookmark(index: number) {
    this.store.dispatch(new BookmarkActions.RemoveBookmark(index))
  }

  showCat(val: number) {
    return GROUPS[val].viewValue
  }

  showCatSel(val: number) {
    console.log("TCL: BookmarkListComponent -> showCatSel -> val", val)
  }

  ngOnInit() {
  }

}
