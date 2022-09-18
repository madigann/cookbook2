import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { welcomeModule } from './home/welcome.module';
import { RouterModule } from '@angular/router';
import { recipeModule } from './recipes/recipe.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    recipeModule,
    welcomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
