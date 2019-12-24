import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Bookmark } from './../models/bookmark.model'
import * as BookmarkActions from './../actions/bookmark.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router} from '@angular/router'

export interface Groups {
  value: number
  viewValue: string
}

@Component({
  selector: 'app-bookmark-add',
  templateUrl: './bookmark-add.component.html',
  styleUrls: ['./bookmark-add.component.scss']
})

export class BookmarkAddComponent implements OnInit {
  // constructor() { }
  constructor(private store: Store<AppState>, 
              private _snackBar: MatSnackBar,
              private router: Router) { }

  addBookmark(name: string, url: string, group: number) {
    if (name.length>0 && url.length>0) {
      this.store.dispatch(new BookmarkActions.AddBookmark({ name: name, url: url, group: group }))
      this.openSnackBar('Success new '+name +' bookmark was added')
      setTimeout(() => {
        this.router.navigateByUrl('/home')
      }, 500);
      
      
    } else {
      this.openSnackBar('Please fill the form')
    }
  }

  openSnackBar(name:string) {
    this._snackBar.open(name,'', {
      duration: 2000,
    });

  }

  clearInputs(val:string,val2:string, val3:string) {
    console.log("TCL: BookmarkAddComponent -> clearInputs -> val", val)
    console.log("TCL: BookmarkAddComponent -> clearInputs -> val2", val2)
    console.log("TCL: BookmarkAddComponent -> clearInputs ->  val3",  val3)

  }

  // work / leisure/ personal 
  groups: Groups[] = [
    { value: 0, viewValue: 'Work' },
    { value: 1, viewValue: 'Leisure' },
    { value: 2, viewValue: 'Personal' },
    { value: 3, viewValue: 'Secret' },
    { value: 4, viewValue: 'NSFW' }
  ];

  ngOnInit() {
  }

}
