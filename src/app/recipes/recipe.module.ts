import { NgModule } from '@angular/core';
import { recipeListComponent } from './recipe-list.component';
import { recipeDetailComponent } from './recipe-detail.component';
import { RouterModule } from '@angular/router';
import { recipeDetailGuard } from './recipe-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    recipeListComponent,
    recipeDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'recipes', component: recipeListComponent },
      {
        path: 'recipes/:id',
        canActivate: [recipeDetailGuard],
        component: recipeDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class recipeModule { }
