import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladMakerComponent } from './salad-maker.component';

describe('SaladMakerComponent', () => {
  let component: SaladMakerComponent;
  let fixture: ComponentFixture<SaladMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaladMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaladMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
