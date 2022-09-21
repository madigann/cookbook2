import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecieComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditRecieComponent;
  let fixture: ComponentFixture<EditRecieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditRecieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
