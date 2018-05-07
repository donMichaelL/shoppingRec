import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.newIngredientAdded.subscribe(
      (ingredientArray: Ingredient[]) => {
        this.ingredients = ingredientArray;
      }
    )
  }

  onNewIngredientCreated(ingredinet: Ingredient) {
    this.ingredients.push(ingredinet);
  }

}
