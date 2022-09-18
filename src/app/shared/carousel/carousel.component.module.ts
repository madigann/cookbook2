import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselBasic } from './carousel.component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [CarouselBasic],
  exports: [CarouselBasic],
  bootstrap: [CarouselBasic]
})
export class CarouselComponentModule { }
