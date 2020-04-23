import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <header>
      <h1 class="text-center">404 - Not Found</h1>
    </header>
    <p class="lead text-center text-warning">Il semble que cette page n'existe pas</p>
    <p class="lead text-center">Revenir sur la page d'<a routerLink="/home">accueil</a></p>
  `,
  styles: [
  ]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
