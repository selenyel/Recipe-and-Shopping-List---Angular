import { Component, ElementRef, EventEmitter, ViewChild, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../service/shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent {

  // @ViewChild('nameInput', {static:false}) nameInputRef : ElementRef;
  // @ViewChild('amountInput', {static:false}) amountInputRef : ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService : ShoppingListService){}

  onAddItem(form: NgForm){
    const value = form.value;
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    const ingName = value.name
    const ingAmount = value.amount

    const newIngredient = new Ingredient(ingName,ingAmount);
    // this.ingredientAdded.emit(newIngredient);

    this.shoppingListService.addIngredients(newIngredient);
  }
}
