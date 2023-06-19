import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe(
    'Apple Pie',
    "1 whole unbaked pie crust 3 whole large (or 4 or 5 small) granny smith apples, peeled, cored, and sliced thin 1/2 c. brown sugar 1/2 c. sugar 1 tbsp. all-purpose Flour",
    'https://hips.hearstapps.com/hmg-prod/images/dreamy-apple-pie-recipe-1633111215.jpg?crop=0.519xw:0.778xh;0.177xw,0.133xh&resize=1200:*'),
    new Recipe(
      'Pumpkin Pie',
      "1 (15 ounce) can pumpkin puree 1 (14 ounce) can EAGLE BRAND® Sweetened Condensed Milk 2 large eggs 1 teaspoon ground cinnamon 0.5 teaspoon ground ginger",
      'https://www.allrecipes.com/thmb/9xC4E3ciEFc6xjLiA6rdEDLbInk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23439-PerfectPumpkinPie_002-4x3-1-44d015659c5c4a0888238d8f22de2a5e.jpg')
  ];

  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
