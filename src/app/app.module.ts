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

//material components
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';

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
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      bookmark: reducer
    }),
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatListModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
