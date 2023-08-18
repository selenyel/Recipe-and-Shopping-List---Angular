import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "src/app/shared/ingredient.model";

export class ShoppingListService{

    // ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients : Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];
    
    getIngredients(){
        return this.ingredients.slice(); // only return a copy
    }

    getIngredient(index: number){
        return this.ingredients[index]; // only return a copy
    }

    addIngredients(ingredient: Ingredient){
        this.ingredients.push(ingredient)
        // this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredientsForRecipeService(ingredients : Ingredient[]){
        
        // This is also OK to be used
        // for(let ingr of this.ingredients){
        //     this.addIngredients(ingr)
        // }

        const that = this;
        // this.ingredients.push(...ingredients); //ES 6 Feature
        ingredients.forEach(function(newIngredient){
            const index = that.ingredients.indexOf(newIngredient)
            if(index === -1){
                that.ingredients.push(newIngredient)
            }
            else{
                console.log(that.ingredients[index].amount + newIngredient.amount)
                that.ingredients[index].amount += newIngredient.amount;
            }
        })
        // this.ingredientsChanged.emit(this.ingredients.slice()); //Emit a copy of it (slice)
        this.ingredientsChanged.next(this.ingredients.slice()); //Emit a copy of it (slice)
    }
}