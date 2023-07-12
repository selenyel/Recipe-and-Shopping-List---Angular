import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.sass']
})
export class RecipeEditComponent {

  id: number;
  editMode:boolean = false;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params
      .subscribe(
        (params:Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          console.log('currently I\'m in editMode :',this.editMode);
        }
      )
      // this.editMode = params['id'] != null;
      // if we have params['id'] we are in the edit mode,
      // else we are creating a new recipe

  }
}
