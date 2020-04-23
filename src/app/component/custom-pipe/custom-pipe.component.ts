import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  liste = [
    { name: 'Aurélie', present: true },
    { name: 'Claudie', present: false },
    { name: 'Clément', present: true },
    { name: 'Johny', present: true },
    { name: 'Jonathan K', present: false },
    { name: 'Jonathan L', present: false },
    { name: 'Julia', present: true },
    { name: 'Lin', present: false },
    { name: 'Maxime', present: false },
    { name: 'Michael', present: true },
    { name: 'Ndiaye', present: true },
    { name: 'Nicolas D', present: false },
    { name: 'Nicolas N', present: true },
    { name: 'Stéphane', present: false },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
