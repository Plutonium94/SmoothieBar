import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { SaladMakerComponent } from '../salad-maker/salad-maker.component';
import { Salad } from '../salad';

@Component({
	selector: 'app-salad-chooser',
	templateUrl: './salad-chooser.component.html',
	styleUrls: ['./salad-chooser.component.css']
})
export class SaladChooserComponent implements OnInit {

	predefinedSalads :Salad[];
	chosenSalad:FormControl = new FormControl('');
	saladMakerVisible :boolean;

	constructor(private router :Router) {
		this.predefinedSalads = [
			new Salad("Tricks of Tuna",'Lettuce',['Tuna','Eggs'],undefined,'Olive oil',23),
			new Salad('Elegant Anchovies', 'Mesclun',['Anchovies','Bell Peppers'],'Cheddar','Vinegar',34),
			new Salad('Green Garden','Broccoli Slaw',['Green Peas','Chilli Peppers'],'Goat Cheese','Lemon Extract',27),
			new Salad('Munchy Mushrooms','Kale',['Mushrooms','Onions'],'Camembert','Olive oil',30)
		];
	}

	ngOnInit() {
	}


	onSubmit() {
		console.log('SaladChooserComponent submitted');
	}

	makeOwn() {
		//this.saladMakerVisible = true;
		this.router.navigate(['/make-salad']);
	}

}
