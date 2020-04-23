import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  // products: Array<Product> = []; // forme generic
  products: Product[] = [];
  product = new Product();

  constructor() {
  }

  ngOnInit(): void {
  }

  public addProduct(form) {
    if (form.valid) {
      this.products.push(this.product);
      this.product = new Product();
      form.reset();
    }
  }

}
