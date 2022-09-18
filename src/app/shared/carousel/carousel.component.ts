import { Component } from '@angular/core';

@Component({
  selector: 'pm-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselBasic {

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = ["assets/images/Cake.png",
            "assets/images/HotChocolate.png",
            "assets/images/Hamburger.png",
            "assets/images/Pizza.png",
            "assets/images/IceCream.png"];
}
