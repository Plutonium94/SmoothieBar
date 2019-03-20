import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SmoothieChooserComponent } from './smoothie-chooser.component';
import { CustomSmoothieMakerComponent } from '../custom-smoothie-maker/custom-smoothie-maker.component';


describe('SmoothieChooserComponent', () => {
  let component: SmoothieChooserComponent;
  let fixture: ComponentFixture<SmoothieChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ SmoothieChooserComponent, CustomSmoothieMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothieChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
