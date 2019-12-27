import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Bookmark } from '../../models/bookmark.model'
import * as BookmarkActions from '../../actions/bookmark.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router} from '@angular/router'

import { Groups } from './../../groups'
import { GROUPS } from './../../mock-groups'

@Component({
  selector: 'app-bookmark-add',
  templateUrl: './bookmark-add.component.html',
  styleUrls: ['./bookmark-add.component.scss']
})

export class BookmarkAddComponent implements OnInit {

  groups = GROUPS

  constructor(private store: Store<AppState>, 
              private _snackBar: MatSnackBar,
              private router: Router) {}

  addBookmark(name: string, url: string, group: number) {
    if (name.length>0 && url.length>0) {
      this.store.dispatch(new BookmarkActions.AddBookmark({ name: name, url: url, group: group }))
      this.openSnackBar('Success new '+name +' bookmark was added')
      setTimeout(() => {
        // this
        console.log("TCL: BookmarkAddComponent -> addBookmark -> this", this)
      }, 500)
    } else {
      this.openSnackBar('Please fill the form')
    }
  }

  openSnackBar(name:string) {
    this._snackBar.open(name,'', {
      duration: 2000,
    });
  }

  ngOnInit() {
  }

}
