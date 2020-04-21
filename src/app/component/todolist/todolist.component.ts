import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {


  tab = [];

  message : string;


  constructor() { }

  ngOnInit(): void {
  }

  addItemsTab(): void
  {
    if(this.message != null){
      this.tab.push(this.message);
      this.message = null;
    }
  }

  deleteItemsTab(key : number): void
  {
    this.tab.splice(key, 1);
  }

}
