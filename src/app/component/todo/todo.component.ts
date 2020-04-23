import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks = [];
  task = null;

  constructor() { }

  ngOnInit(): void {
  }

  public add(): void {
    if ( this.task != null ) {
      this.tasks.push( this.task );
      this.task = null;
    }
  }

  public remove(index: number): void {
    this.tasks.splice(index, 1);
  }

}
