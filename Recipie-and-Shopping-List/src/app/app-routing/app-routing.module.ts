import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecipesComponent } from '../recipes/recipes.component';

const appRoutes: Routes = [
  {path: '', redirectTo:'/recipes', pathMatch:'full' },
  {path: 'recipes', component: RecipesComponent },
  {path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }





// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// import { RecipesComponent } from './recipes/recipes.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';

// const appRoutes: Routes = [
//   {path: '', redirectTo:'/recipes', pathMatch:'full' },
//   {path: 'recipes', component: RecipesComponent },
//   {path: 'shopping-list', component: ShoppingListComponent },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(appRoutes)],
//   //        RouterModule.forRoot(appRoutes, {useHash:true})
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }




/*

  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    // children: [
    //   // {
    //   //   path: ':name', 
    //   //   component: RecipeListComponent,
    //   //   children: [
    //   //     {
    //   //       path: 'recipe-item',
    //   //       component: RecipeItemComponent
    //   //     }
    //   //   ]
    //   // },
    //   // {
    //   //   path: 'detail',
    //   //   component: RecipeDetailComponent
    //   // }
    // ]
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  // {
  //   path: '404',
  // },
  // {
  //   path:'**',
  //   redirectTo:'/404',
  //   pathMatch: 'full'
  // }
*/