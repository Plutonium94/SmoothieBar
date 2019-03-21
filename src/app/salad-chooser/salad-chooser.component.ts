import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SaladMakerComponent } from '../salad-maker/salad-maker.component';
import { Salad } from '../salad';
import { CartService } from '../cart.service';

@Component({
	selector: 'app-salad-chooser',
	templateUrl: './salad-chooser.component.html',
	styleUrls: ['./salad-chooser.component.css']
})
export class SaladChooserComponent implements OnInit {

	predefinedSalads :Salad[];
	chosenSalad:FormControl = new FormControl('',Validators.required);
	saladMakerVisible :boolean;

	constructor(private router :Router, private cartService :CartService) {
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
		if(this.chosenSalad.valid) {
			let chosenSaladName :string = this.chosenSalad.value;
			let res :Salad = this.predefinedSalads.find((s:Salad)=>{
				return s.name == chosenSaladName;
			});
			console.log(res);
			this.cartService.add(res);
		}
	}

	makeOwn() {
		//this.saladMakerVisible = true;
		this.router.navigate(['/make-salad']);
	}

}
