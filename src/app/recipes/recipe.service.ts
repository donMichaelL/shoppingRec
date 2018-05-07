import { Recipe } from '../recipes/recipe.model'
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Hamburger', 
            'This is a new burger', 
            'http://2wk128489wjq47m3kwxwe9hh.wpengine.netdna-cdn.com/wp-content/uploads/2015/03/burgers-bacon-guacamole-burger-main.jpg',
            [new Ingredient('meat', 1), new Ingredient('cucumber',2)]),
        new Recipe('Cheeseburger', 
            'This is a new burger', 
            'http://2wk128489wjq47m3kwxwe9hh.wpengine.netdna-cdn.com/wp-content/uploads/2015/03/burgers-bacon-guacamole-burger-main.jpg',
            [new Ingredient('meat', 2), new Ingredient('nothing', 3)])
      ];
    
    getRecipes() {
        // With .slice a copy of table is returned
        return this.recipes.slice();
    }

    constructor(private slService: ShoppingListService) {}


    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}