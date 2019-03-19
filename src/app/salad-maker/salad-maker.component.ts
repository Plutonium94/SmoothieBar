import { Component, OnInit, AfterViewInit, ViewChild, DebugElement } from '@angular/core';
import { FormControl, FormArray } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { Salad } from '../salad';
import { CartService } from '../cart.service';

@Component({
	selector: 'app-salad-maker',
	templateUrl: './salad-maker.component.html',
	styleUrls: ['./salad-maker.component.css']
})
export class SaladMakerComponent implements OnInit, AfterViewInit {

	bases :string[] = ['Mesclun','Lettuce','Brocolli Slaw', 'Kale'];
	bodyIngredients :string[] = ['Tuna','Bell Peppers','Chilli Peppers','Green Peas',
		'Carrots', 'Eggs','Anchovies','Fried Chicken Strips','Dried Tomatoes','Tomatoes'
		,'Salami','Beetroots','Onions'];
	cheeses :string[] = ['Cheddar','Parmesan','Camembert','Goat Cheese','Mozzarella'];
	seasonings :string[] = ['Olive Oil','Lemon Extract','Pesto','Vinegar'];

	chosenBase :FormControl;
	chosenBodyIngredients :FormArray;
	chosenCheese :FormControl;
	chosenSeasoning :FormControl;

	@ViewChild('form')
	form :DebugElement;

	constructor(private cartService :CartService, private router :Router) { }

	ngOnInit() {
		this.chosenBase = new FormControl();
		let chosenBodyIngredientsArg = (new Array(this.bodyIngredients.length)).fill(new FormControl());
		this.chosenBodyIngredients = new FormArray(chosenBodyIngredientsArg);

		this.chosenCheese = new FormControl();
		this.chosenSeasoning = new FormControl();
	}

	ngAfterViewInit() {
		let selects  = this.form.nativeElement.querySelectorAll('select');	
		selects.forEach((s)=>{
			s.selectedIndex = -1;
		});
	}

	onSubmit() {
		console.log(this.chosenBodyIngredients);
		let chosenBodyIngredientsNames:string[] = [];
		for(let i = 0; i < this.bodyIngredients.length; i++) {
			if(this.chosenBodyIngredients.value[i]) {
				chosenBodyIngredientsNames[i] = this.bodyIngredients[i];
			}	
		}
		let res :Salad = new Salad('',this.chosenBase.value, chosenBodyIngredientsNames,this.chosenCheese.value, this.chosenSeasoning.value,56);
		console.log(res.description);
		this.cartService.add(res);
		this.router.navigate(['/salad']);
	}

}
