import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <!-- navbar -->
  <div class= "bg-light">
    <div class= "container-sm">
      <nav class="navbar navbar-expand-sm" style="background-color: rgba(0, 0, 0, 0.2);">
        <a class='ps-2 navbar-brand'> {{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Welcome</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/recipes'>Recipes</a></li>
        </ul>
      </nav>
      <router-outlet></router-outlet>
      <!-- footer -->
      <footer class="bg-light text-center text-lg-start">
      <div class="text-center">Developed by:</div>
        <div class="container-fluid text-center">
          <h3>Noel Madigan</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
            aliquam voluptatem veniam, est atque cumque eum delectus sint!
          </p>
        </div>
        <!-- Copyright -->
        <div class= "container-sm text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
          © 2022 Copyright:
        <a href="email:nmadigan@industrial-integration.com">nmadigan@industrial-integration.com</a>
        </div>
      </footer>
    </div>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'My Recipes';
}
