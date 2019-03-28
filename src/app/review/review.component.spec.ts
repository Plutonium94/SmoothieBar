import { async, tick,  fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Spy  } from 'jasmine-core';  

import { ReviewComponent } from './review.component';

function getNumberOfReviews(fixture :ComponentFixture<ReviewComponent>) {
	let reviewDe :DebugElement[] = fixture.debugElement.queryAll(By.css('article p'));
	return reviewDe.length;
}

describe('ReviewComponent', () => {
	let component: ReviewComponent;
	let fixture: ComponentFixture<ReviewComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [FormsModule, ReactiveFormsModule],
			declarations: [ ReviewComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ReviewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('form invalid when empty', ()=>{
		expect(component.name.valid).toBeFalsy();
		expect(component.email.valid).toBeFalsy();
		expect(component.comment.valid).toBeFalsy();
	});

	it('email validty', ()=>{
		expect(component.email.valid).toBeFalsy();
		for(let invalidEmail of ['red@','blue@.com', '@blue.com']) {
			component.email.setValue(invalidEmail);
			expect(component.email.valid).toBeFalsy();
		}
		component.email.setValue('a@a.com');
		expect(component.email.valid).toBeTruthy();
		
	});

	it('should have existing review', ()=> {
		expect(getNumberOfReviews(fixture)).toBe(2);
	}); 

	it('add review', fakeAsync(()=>{
		component.name.setValue('Stroustroup');
		component.email.setValue('stroustroup@cpluspluslanguage.org');
		component.comment.setValue('I love the Glorious Guava smoothie !!!');

		for(let formControlName of ['name','email','comment']) {
			expect(component[formControlName].valid).toBeTruthy();
		} 


		fixture.detectChanges();
		let formDe: DebugElement = fixture.debugElement.query(By.css('form'));
		expect(formDe).toBeTruthy();

		formDe.triggerEventHandler('submit', null);
		tick();

		for(let formControlName of ['name','email','comment']) {
			expect(component[formControlName].valid).toBeTruthy();
		}


		expect(component.reviews.length).toBe(3);
 
		fixture.detectChanges();
		tick();
		

 

		expect(getNumberOfReviews(fixture)).toBe(3); 
	}));
});
