import { ComponentFixture, TestBed } from '@angular/core/testing';

import { recipeDetailComponent } from './recipe-detail.component';

describe('recipeDetailComponent', () => {
  let component: recipeDetailComponent;
  let fixture: ComponentFixture<recipeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ recipeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(recipeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
