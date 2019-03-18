import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladChooserComponent } from './salad-chooser.component';

describe('SaladChooserComponent', () => {
  let component: SaladChooserComponent;
  let fixture: ComponentFixture<SaladChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaladChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaladChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
