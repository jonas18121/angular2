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


  constructor() { }

  ngOnInit(): void {
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

}
