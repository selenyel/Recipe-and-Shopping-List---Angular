import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../recipe.model";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "src/app/shopping-list/service/shopping-list.service";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes : Recipe[] = [
        new Recipe(
            'Apple Pie',
            "1 whole unbaked pie crust 3 whole large (or 4 or 5 small) granny smith apples, peeled, cored, and sliced thin 1/2 c. brown sugar 1/2 c. sugar 1 tbsp. all-purpose Flour",
            'https://hips.hearstapps.com/hmg-prod/images/dreamy-apple-pie-recipe-1633111215.jpg?crop=0.519xw:0.778xh;0.177xw,0.133xh&resize=1200:*',
            [
                new Ingredient('Unbaked Pie Crust', 1),
                new Ingredient('Granny Smith Apples',3),
                new Ingredient('Brown Sugar', 1.2),
                new Ingredient('Flour', 1)
            ]
        ),
        new Recipe(
            'Pumpkin Pie',
            "1 (15 ounce) can pumpkin puree 1 (14 ounce) can EAGLE BRAND® Sweetened Condensed Milk 2 large eggs 1 teaspoon ground cinnamon 0.5 teaspoon ground ginger",
            'https://www.allrecipes.com/thmb/9xC4E3ciEFc6xjLiA6rdEDLbInk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23439-PerfectPumpkinPie_002-4x3-1-44d015659c5c4a0888238d8f22de2a5e.jpg',
            [
                new Ingredient('Can Pumpkin Puree', 1),
                new Ingredient('Sweetened Condensed Milk', 1),
                new Ingredient('Large Egg', 2),
                new Ingredient('Ground Cinnamon',1),
                new Ingredient('Ground Ginger', 1)
            ]
        )
    ];

    constructor(private shoppingListService : ShoppingListService){}

    getRecipes(){
        return this.recipes.slice(); //slice is for making a copy of this array 
        // because array variables are reference types in JS  
    }

    addIngredientsToShoppingList(ingredients : Ingredient[]){
        this.shoppingListService.addIngredientsForRecipeService(ingredients);
    }
}