import { Component, ElementRef, EventEmitter, ViewChild, Output, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../service/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent{

  subscription: Subscription;
  editMode = false;
  editedItemIndex : number;
  editedItem: Ingredient;

  @ViewChild('formLocalRef', {static:false}) shoppingListForm : NgForm;

  // @ViewChild('nameInput', {static:false}) nameInputRef : ElementRef;
  // @ViewChild('amountInput', {static:false}) amountInputRef : ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService : ShoppingListService){}

  ngOnInit(){
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true
          this.editedItem = this.shoppingListService.getIngredient(index)
          this.shoppingListForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }

  onAddItem(form: NgForm){
    const value = form.value;
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    const ingName = value.name
    const ingAmount = value.amount

    const newIngredient = new Ingredient(ingName,ingAmount);
    // this.ingredientAdded.emit(newIngredient);
    if(this.editMode)
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
    else
      this.shoppingListService.addIngredients(newIngredient);
  }

  OnDestroy(){
    this.subscription.unsubscribe();
  }
}
