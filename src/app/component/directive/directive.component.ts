import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  isVisible = true;
  hasClass = false;
  progress = '25%';
  bgcolor = 'red';
  mode: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  public message(visible: boolean): string {
    if (visible) {
      return 'Hello World';
    }

    return;
  }

}
