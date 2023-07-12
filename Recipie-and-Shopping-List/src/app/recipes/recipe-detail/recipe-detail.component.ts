import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../service/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.sass']
})
export class RecipeDetailComponent {

  recipe: Recipe
  id : number
  // @Input() recipe: Recipe

  constructor (
                private recipeService: RecipeService,
                private route: ActivatedRoute
              )
              {

              }

  ngOnInit(){

    // const id = this.route.snapshot.params['id']
    // This won't work because we are going to change the id a lot.
    // This will give us only the first id when the component first rendered via a route

    this.route.params
      .subscribe(
        (params:Params) => {
          this.id = +params['id'] // params[id] returns string so we typecast it to a number
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      )
      // This takes the id from the route itself 
      // and it is dynamically changes because we subscribed to it
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}

