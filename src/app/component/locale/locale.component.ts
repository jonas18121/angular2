import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html',
  styleUrls: ['./locale.component.css']
})
export class LocaleComponent implements OnInit {

  date = new Date();
  lang: string;
  devise: string;

  constructor() { }

  ngOnInit(): void { }

}
