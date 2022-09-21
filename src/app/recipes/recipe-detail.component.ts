import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRecipe } from './recipe';
import { recipeService } from './recipe.service';

@Component({
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class recipeDetailComponent implements OnInit {
  pageTitle = 'recipe Detail';
  errorMessage = '';
  recipe: IRecipe | any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipeService: recipeService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getrecipe(id);
    }
  }

  getrecipe(id: number): void {
    this.recipeService.getrecipe(id).subscribe({
      next: recipe => this.recipe = recipe,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/recipes']);
  }
}
