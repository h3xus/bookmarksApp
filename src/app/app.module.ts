import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// routing and main component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ngrx store and reducer
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/bookmark.reducer';

// main page components
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddComponent } from './components/add/add.component';

// sub components
import { BookmarkListComponent } from './components/bookmark-list/bookmark-list.component';
import { BookmarkAddComponent } from './components/bookmark-add/bookmark-add.component';
import { BookmarkEditComponent } from './components/bookmark-edit/bookmark-edit.component';
import { BookmarkFilterComponent } from './components/bookmark-filter/bookmark-filter.component';

// all material modules
import { MaterialModule } from './material.module';
import { SelectingComponent } from './components/selecting/selecting.component';

@NgModule({
  declarations: [
    AppComponent,
    BookmarkListComponent,
    BookmarkAddComponent,
    BookmarkEditComponent,
    BookmarkFilterComponent,
    HomeComponent,
    EditComponent,
    PageNotFoundComponent,
    AddComponent,
    SelectingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      bookmark: reducer
    }),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
