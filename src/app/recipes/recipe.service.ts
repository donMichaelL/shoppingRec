import { Recipe } from '../recipes/recipe.model'

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Hamburger', 'This is a new burger', 'http://2wk128489wjq47m3kwxwe9hh.wpengine.netdna-cdn.com/wp-content/uploads/2015/03/burgers-bacon-guacamole-burger-main.jpg'),
        new Recipe('Cheeseburger', 'This is a new burger', 'http://2wk128489wjq47m3kwxwe9hh.wpengine.netdna-cdn.com/wp-content/uploads/2015/03/burgers-bacon-guacamole-burger-main.jpg')
      ];
    
    getRecipes() {
        // With .slice a copy of table is returned
        return this.recipes.slice();
    }
}