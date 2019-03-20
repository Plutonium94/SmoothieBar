import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
	selector: 'app-smoothie-chooser',
	templateUrl: './smoothie-chooser.component.html',
	styleUrls: ['./smoothie-chooser.component.css']
})
export class SmoothieChooserComponent implements OnInit {

	smoothies:Product[] = []; 

	customSmoothie:boolean = false;

	constructor(private cartService :CartService) {
		let smoothiePrices = {'Apple Delite':30,'Orange':34,'Marvellous Mango':56,'Scintillating Strawberry':43,'Glorious Guava':40};
		for(let key in smoothiePrices) {
			this.smoothies.push({"name":key, "price": smoothiePrices[key]});
		}
	}

	ngOnInit() {
	}

	addToPanier(s :Product) {
		this.cartService.add(s);
	}

	closeCustomChooser() {
		this.customSmoothie = false;
	}


}
