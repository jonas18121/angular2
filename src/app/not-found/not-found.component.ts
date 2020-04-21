import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <header>
        <h1 class="text-center" >404 - Not Found </h1>
    </header>
    <p class="lead text-center text-warning"> existe pas </p>
    <p class="lead text-center text-warning"> nonono </p>
  `,
  styles: [
  ]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
