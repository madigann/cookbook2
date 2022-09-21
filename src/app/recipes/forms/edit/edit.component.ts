import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    name: 'Tom',
    description: null,
    rating: 0,
    done: null,
    imageUrl: null
  }

  recipe: IRecipe = { ...this.originalrecipe }
  postError = false;
  postErrorMessage = '';
  getErrorMessage = '';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private recipeService: recipeService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    // this.getrecipe(id);
  }

  // getrecipe(id: number): void {
  //   this.recipeService.getrecipe(id).subscribe({
  //     next: recipe => this.recipe = recipe,
  //     error: err => this.getErrorMessage = err
  //   });
  // }

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

  onBack(recipeId: number): void {
    this.router.navigate(['/recipes', recipeId]);
  }
}
