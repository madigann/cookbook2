import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError, map } from "rxjs";

import { IRecipe } from "./recipe";

@Injectable({
  providedIn: 'root'
})
export class recipeservice {
  // If using Stackblitz, replace the url with this line
  // because Stackblitz can't find the api folder.
  // private recipeUrl = 'assets/recipes/recipes.json';
  private recipeUrl = 'assets/data/recipes.json';

  constructor(private http: HttpClient) { }

  getrecipes(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(this.recipeUrl)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  // Get one recipe
  // Since we are working with a json file, we can only retrieve all recipes
  // So retrieve all recipes and then find the one we want using 'map'
  getrecipe(id: number): Observable<IRecipe | undefined> {
    return this.getrecipes()
      .pipe(
        map((recipes: IRecipe[]) => recipes.find(p => p.recipeId === id))
      );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }

}