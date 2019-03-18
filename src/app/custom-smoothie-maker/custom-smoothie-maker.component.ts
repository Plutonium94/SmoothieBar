import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
	selector: 'app-custom-smoothie-maker',
	templateUrl: './custom-smoothie-maker.component.html',
	styleUrls: ['./custom-smoothie-maker.component.css']
})
export class CustomSmoothieMakerComponent implements OnInit {

	fruits :string[] = ['apple','banana','orange','grapes','lemon','strawberry'];
	chosenFruits :string[] = [];
	@Output('close')
	closef :EventEmitter<any> = new EventEmitter<any>();


	constructor(private cartService :CartService) {

	}

	ngOnInit() {
	
	}

	makeCustomSmoothie() {
		console.log(this.chosenFruits);
		let fruitsChosen:string[] = [];
		for(let i = 0; i < this.chosenFruits.length; i++) {
			if(this.chosenFruits[i]) { fruitsChosen.push(this.fruits[i]);}
		}
		let prix = this.chosenFruits.length * 5;
		this.cartService.add({name:"Custom made smoothie with " + fruitsChosen, price: prix});
		this.closef.emit(true);
	}


}
