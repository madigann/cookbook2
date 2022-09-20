import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { onErrorResumeNext } from 'rxjs';
import { IRecipe } from '../../recipe';
import { recipeService } from '../../recipe.service';

@Component({
  selector: 'pm-recipe-form-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditRecieComponent implements OnInit {

  originalrecipe: IRecipe = {
    recipeId: 0,
    name: '',
    description: null,
    rating: 0,
    done: null,
    imageUrl: null
  }

  recipe: IRecipe = { ...this.originalrecipe }
  postError = false;
  postErrorMessage = '';

  constructor(private recipeService: recipeService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    // console.log('in onSubmit: ', form.valid)
    if (form.valid) {
      this.recipeService.postEditRecipeForm(this.recipe).subscribe({
        next: result => console.log('success: ', result),
        error: error => this.onHttpError(error)
      });
    }
    else {
      this.postError = true;
      this.postErrorMessage = "Please fix the errors above...";
    }
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse)
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }
}
