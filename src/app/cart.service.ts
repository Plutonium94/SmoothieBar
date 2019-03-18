import { Injectable } from '@angular/core';

import { Product } from './product';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CartService {

	products :Subject<Product>;

	constructor() { 
		this.products = new Subject<Product>();
	}

	public add(p :Product) {
		this.products.next(p);
	}
}
