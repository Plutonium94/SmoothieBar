import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CustomSmoothieMakerComponent } from './custom-smoothie-maker.component';

describe('CustomSmoothieMakerComponent', () => {
  let component: CustomSmoothieMakerComponent;
  let fixture: ComponentFixture<CustomSmoothieMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, FormsModule, ReactiveFormsModule],
      declarations: [ CustomSmoothieMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSmoothieMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
