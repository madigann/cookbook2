import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IRecipe } from '../../recipe';
import { recipeService } from '../../recipe.service';

@Component({
  selector: 'pm-recipe-form-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewRecipeComponent implements OnInit {

  recipe: IRecipe = {
    id: 0,
    name: '',
    description: null,
    rating: 0,
    done: null,
    imageUrl: null
  }

  postError = false;
  postErrorMessage = '';
  getErrorMessage = '';

  constructor(private router: Router,
              private recipeService: recipeService) { }

  ngOnInit(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    // console.log(id);
    // this.getrecipe(id);
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid)
    if (form.valid) {
      this.recipeService.postNewRecipeForm(this.recipe).subscribe({
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

  onBack(): void {
    this.router.navigate(['/recipes']);
  }

}
