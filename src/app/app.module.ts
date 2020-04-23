import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { registerLocaleData } from '@angular/common';
import localefr from '@angular/common/locales/fr';
import localede from '@angular/common/locales/de';
import localeja from '@angular/common/locales/ja';

registerLocaleData(localefr);
registerLocaleData(localede);
registerLocaleData(localeja);

import { AppComponent } from './component/base/app.component';
import { PresentationComponent } from './component/presentation/presentation.component';
import { TodoComponent } from './component/todo/todo.component';
import { RouteComponent } from './component/route/route.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { FiltreComponent } from './component/filtre/filtre.component';
import { DirectiveComponent } from './component/directive/directive.component';
import { LocaleComponent } from './component/locale/locale.component';
import { CustomPipeComponent } from './component/custom-pipe/custom-pipe.component';
import { PipelindromePipe } from './pipe/pipelindrome/pipelindrome.pipe';
import { PresentPipe } from './pipe/present/present.pipe';
import { CustomDirectiveComponent } from './component/custom-directive/custom-directive.component';
import { HighlightDirective } from './directive/highlight/highlight.directive';
import { FormulaireComponent } from './component/formulaire/formulaire.component';
import { SignupComponent } from './component/signup/signup.component';
import { ServiceComponent } from './component/service/service.component';
import { PromobseComponent } from './component/promobse/promobse.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    TodoComponent,
    RouteComponent,
    NotFoundComponent,
    FiltreComponent,
    DirectiveComponent,
    LocaleComponent,
    CustomPipeComponent,
    PipelindromePipe,
    PresentPipe,
    CustomDirectiveComponent,
    HighlightDirective,
    FormulaireComponent,
    SignupComponent,
    ServiceComponent,
    PromobseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //pour les formulaire et ngModel
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },               // default value = en
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },  // Depuis Angular9, default value = USD
  ],
  // bootstrap: [AppComponent, PresentationComponent, TodoComponent]
  bootstrap: [RouteComponent]
})
export class AppModule { }
