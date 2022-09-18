import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <!-- navbar -->
  <div class= 'container-sm' >
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <a class='ps-2 navbar-brand'> {{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Welcome</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/recipes'>Recipes</a></li>
        </ul>
    </nav>
    <router-outlet></router-outlet>
  </div> `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'My Recipes';
}
