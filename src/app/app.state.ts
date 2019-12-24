import { Bookmark } from './models/bookmark.model'

export interface AppState {
    readonly bookmark: Bookmark[];
}