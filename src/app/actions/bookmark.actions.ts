import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Bookmark } from './../models/bookmark.model'

export const ADD_BOOKMARK = '[Bookmark] Add'
export const REMOVE_BOOKMARK = '[Bookmark] Remove'

export class AddBookmark implements Action {
  readonly type = ADD_BOOKMARK

  constructor(public payload: Bookmark) { }
}

export class RemoveBookmark implements Action {
  readonly type = REMOVE_BOOKMARK

  constructor(public payload: number) { }
}

export type Actions = AddBookmark | RemoveBookmark