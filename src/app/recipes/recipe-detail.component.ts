import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRecipe } from './recipe';
import { recipeservice } from './recipe.service';

@Component({
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class recipeDetailComponent implements OnInit {
  pageTitle = 'recipe Detail';
  errorMessage = '';
  recipe: IRecipe | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipeservice: recipeservice) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getrecipe(id);
    }
  }

  getrecipe(id: number): void {
    this.recipeservice.getrecipe(id).subscribe({
      next: recipe => this.recipe = recipe,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/recipes']);
  }
}
