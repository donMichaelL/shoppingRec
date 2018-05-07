import { Ingredient } from '../shared/ingredient.model'
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

    newIngredientAdded = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('ham', 2),
        new Ingredient('cheese', 4)
      ];

    getIngredients() {
        return this.ingredients;
    }

    addNewIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.newIngredientAdded.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.newIngredientAdded.emit(this.ingredients.slice());
    }
}