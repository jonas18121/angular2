import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.css']
})
export class FiltreComponent implements OnInit {


  date = new Date();
  object = { firstname: 'John', lastname: 'Doe', email: 'john.doe@gmail.com' };
  user = null;

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

  nb = 5;
  start = 0;
  end = this.nb;
  

  constructor() { }

  ngOnInit(): void {
  }

  public prev( ) : void
  {
    if(this.start >= this.nb){
      this.start -= this.nb;
      this.end -= this.nb;
    }
  }

  public next( ) : void
  {
    if(this.end < this.liste.length){
      this.start += this.nb;
      this.end += this.nb;
    }
  }

}
