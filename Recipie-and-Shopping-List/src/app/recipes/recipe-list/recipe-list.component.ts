import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent {

  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes : Recipe[];

  constructor(private recipeService: RecipeService){}

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe : Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }
}
