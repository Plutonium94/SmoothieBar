import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	products :Product[] = [];
	total : number = 0;

	constructor(private cartService :CartService) { }

	ngOnInit() {
		this.cartService.products.subscribe((p :Product)=>{
			this.products.push(p);
			this.total += p.price;
		});
	}

	removeFromProducts(index :number) {
		this.total -= this.products[index].price;
		this.products.splice(index,1);
	}

	calculateTotal() {
		this.products.reduce((acc, curr, i, src )=>{
			return acc + curr.price;
		}, 0);
	}

	pay() {
		this.products = [];
		this.total = 0;
	}
}
