import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  // par défaut, si vous ne précisez pas de visibilité
  // les propriétés sont publics
  name = 'Stéphane'; // string
  chaine: string;
  product = { name: 'Pomme', price: 12.90 };
  html = '<b>Hello World</b>';
  img = 'assets/images/chopper.jpg';

  message: string;
  liste = [
    'Aurélie', 'Claudie', 'Clément', 'Johny', 'Jonathan K', 'Jonathan L',
    'Julia', 'Lin', 'Maxime', 'Michael', 'Ndiaye', 'Nicolas D', 'Nicolas N',
    'Stéphane'
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('coucou');
  }

  public clicked(): void {
    alert('Bravo !');
  }

  public confirmation(event: MouseEvent): void {
    event.preventDefault();
    confirm('Etes vous sur ?');
  }

  public displayMessage(): void {
    alert(this.message);
  }

}














