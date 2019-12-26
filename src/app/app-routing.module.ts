import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { BookmarkListComponent } from './components/bookmark-list/bookmark-list.component';
import { BookmarkEditComponent } from './components/bookmark-edit/bookmark-edit.component';
import { BookmarkFilterComponent } from './components/bookmark-filter/bookmark-filter.component';



// const routes: Routes = [];
const routes: Routes = [
  { path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: BookmarkListComponent
      },
      {
        path: 'filter',
        component: BookmarkFilterComponent
      },
      {
        path: 'edit',
        component: BookmarkEditComponent
      }
    ] },
  { path: 'add', component: AddComponent },
  { path: 'edit', component: EditComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
