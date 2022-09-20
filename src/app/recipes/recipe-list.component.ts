import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IRecipe } from "./recipe";
import { recipeService } from "./recipe.service";

@Component({
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class recipeListComponent implements OnInit, OnDestroy {
  pageTitle = 'recipe List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  sub!: Subscription;

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredrecipes = this.performFilter(value);
  }

  filteredrecipes: IRecipe[] = [];
  recipes: IRecipe[] = [];

  constructor(private recipeservice: recipeService) {}

  performFilter(filterBy: string): IRecipe[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.recipes.filter((recipe: IRecipe) =>
      recipe.name.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.recipeservice.getrecipes().subscribe({
      next: recipes => {
        this.recipes = recipes;
        this.filteredrecipes = this.recipes;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'recipe List: ' + message;
  }
}
