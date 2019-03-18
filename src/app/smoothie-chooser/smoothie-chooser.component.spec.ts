import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothieChooserComponent } from './smoothie-chooser.component';

describe('SmoothieChooserComponent', () => {
  let component: SmoothieChooserComponent;
  let fixture: ComponentFixture<SmoothieChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoothieChooserComponent ]
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
