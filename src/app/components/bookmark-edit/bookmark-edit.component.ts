import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Bookmark } from '../../models/bookmark.model';
import { AppState } from '../../app.state';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private store: Store<AppState>,
              private _snackBar: MatSnackBar,) {
    this.bookmarks = store.select('bookmark')
  }

  removeBookmark(index: number) {
    this.openSnackBar(`Removing bookmark no. "${index}"`)
    setTimeout(() => {
      this.store.dispatch(new BookmarkActions.RemoveBookmark(index))
    }, 500)
  }

  openSnackBar(name: string) {
    this._snackBar.open(name, '', {
      duration: 2000,
    });
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
