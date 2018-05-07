import { Recipe } from '../recipes/recipe.model'
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

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
}