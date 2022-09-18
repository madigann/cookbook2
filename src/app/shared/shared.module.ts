import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';
import { CarouselComponentModule } from './carousel/carousel.component.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule,
    CarouselComponentModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    CarouselComponentModule
  ]
})

export class SharedModule { }


platformBrowserDynamic()
  .bootstrapModule(CarouselComponentModule)
  .catch(err => console.error(err));
