import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './component/base/app.component';
import { PresentationComponent } from './component/presentation/presentation.component';
import { TodoComponent } from './component/todo/todo.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { FiltreComponent } from './component/filtre/filtre.component';
import { DirectiveComponent } from './component/directive/directive.component';
import { LocaleComponent } from './component/locale/locale.component';
import { CustomPipeComponent } from './component/custom-pipe/custom-pipe.component';
import { CustomDirectiveComponent } from './component/custom-directive/custom-directive.component';
import { FormulaireComponent } from './component/formulaire/formulaire.component';
import { SignupComponent } from './component/signup/signup.component';
import { ServiceComponent } from './component/service/service.component';
import { PromobseComponent } from './component/promobse/promobse.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'filtre', component: FiltreComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'locale', component: LocaleComponent },
  { path: 'custom/pipe', component: CustomPipeComponent },
  { path: 'custom/directive', component: CustomDirectiveComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'promobse', component: PromobseComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // prefix
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
