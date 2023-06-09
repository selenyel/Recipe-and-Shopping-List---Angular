import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../service/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent {

  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes : Recipe[];

  constructor(
              private recipeService: RecipeService, 
              private router: Router,
              private route: ActivatedRoute
            ){}

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe : Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
