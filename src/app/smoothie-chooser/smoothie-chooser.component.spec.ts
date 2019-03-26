import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

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

    it('customSmoothie button test', ()=>{
        const buttonDe :DebugElement = fixture.debugElement.query(By.css("#own"));
        buttonDe.triggerEventHandler('click', null);
        expect(component.customSmoothie).toBe(true);
    });
});
