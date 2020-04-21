import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// mes créations
import { AppComponent } from './component/base/app.component';
import { PresentationComponent } from './component/presentation/presentation.component';
import { TodolistComponent } from './component/todolist/todolist.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FiltreComponent } from './component/filtre/filtre.component';
import { DirectiveComponent } from './component/directive/directive.component';
import { LocaleComponent } from './component/locale/locale.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'todolist', component: TodolistComponent },
  { path: 'filtre', component: FiltreComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'locale', component: LocaleComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

/* 
{ path: '', redirectTo: '/home', pathMatch: 'full' } = définir la page par défault
full = on recherche que /home
prefix = tous les chemin qui commence par /home

{ path: '**', componenent: NotFoundComponent } = géré la page d'érreur
 */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
