import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent {
  recipes : Recipe[] = [
    new Recipe(
    'Apple Pie',
    "1 whole unbaked pie crust 3 whole large (or 4 or 5 small) granny smith apples, peeled, cored, and sliced thin 1/2 c. brown sugar 1/2 c. sugar 1 tbsp. all-purpose Flour",
    'https://hips.hearstapps.com/hmg-prod/images/dreamy-apple-pie-recipe-1633111215.jpg?crop=0.519xw:0.778xh;0.177xw,0.133xh&resize=1200:*'),
    new Recipe(
      'Apple Pie',
      "1 whole unbaked pie crust 3 whole large (or 4 or 5 small) granny smith apples, peeled, cored, and sliced thin 1/2 c. brown sugar 1/2 c. sugar 1 tbsp. all-purpose Flour",
      'https://hips.hearstapps.com/hmg-prod/images/dreamy-apple-pie-recipe-1633111215.jpg?crop=0.519xw:0.778xh;0.177xw,0.133xh&resize=1200:*')
  ];



}
