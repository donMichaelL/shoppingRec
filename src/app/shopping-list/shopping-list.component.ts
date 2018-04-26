import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('ham', 2),
    new Ingredient('cheese', 4)
  ];

  constructor() { }

  ngOnInit() {
  }

  onNewIngredientCreated(ingredinet: Ingredient) {
    this.ingredients.push(ingredinet);
  }

}
