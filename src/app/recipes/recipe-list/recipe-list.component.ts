import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() newRecipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Hamburger', 'This is a new burger', 'http://2wk128489wjq47m3kwxwe9hh.wpengine.netdna-cdn.com/wp-content/uploads/2015/03/burgers-bacon-guacamole-burger-main.jpg'),
    new Recipe('Cheeseburger', 'This is a new burger', 'http://2wk128489wjq47m3kwxwe9hh.wpengine.netdna-cdn.com/wp-content/uploads/2015/03/burgers-bacon-guacamole-burger-main.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeChanged(recipe: Recipe){
    this.newRecipeWasSelected.emit(recipe);
  }

}
