import { Action } from '@ngrx/store'
import { Bookmark } from './../models/bookmark.model'
import * as BookmarkActions from './../actions/bookmark.actions'

const initialState: Bookmark = {
    name: 'Localhost project link Bookmark',
    url: 'http://localhost:4200/',
    group: 0
}

export function reducer(state: Bookmark[] = [initialState], action: BookmarkActions.Actions) {
    switch (action.type) {
        case BookmarkActions.ADD_BOOKMARK:
            return [...state, action.payload];

        case BookmarkActions.REMOVE_BOOKMARK:
            state.splice(action.payload, 1)
            return state;
        default:
            return state;
    }
}