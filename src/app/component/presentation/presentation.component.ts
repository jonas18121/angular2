import { Component, OnInit } from '@angular/core'; //équivalent d'un controlleur

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  name = 'stéphane';

  product = {name: 'pomme', price: '12.5' };

  html = '<b> bullot </b>';

  // img = "assets/images/image.png";

message : string;

liste = [
  "Aurélie", 
  "Claudie",
  "Clément", 
  "Jonathan l",
  "Jonathan k",
  "Lin",
  "Maxime",
  "Michael", 
  "Ndiaye", 
  "Nicolas D",
  "Nicolas N", 
  "Stéphane"
];


  constructor() { }

  ngOnInit(): void {
    console.log('coucou');
    
  }

  public clicked(): void 
  {
    alert('bravo !');
  }

  public confirmation(event) : void
  {
    event.preventDefault();
    confirm('Ete vous sur ?');
  }

  public displayMessage()
  {
    alert(this.message);
  }

}
