import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

import { Review } from '../review';

@Component({
	selector: 'app-review',
	templateUrl: './review.component.html',
	styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

	name: FormControl = new FormControl('', Validators.required);
	email :FormControl = new FormControl('', [Validators.required, Validators.email]);
	comment :FormControl = new FormControl('',Validators.required);

	reviews : Review[] = [];

	constructor() {
		let fakeComments = ["Hi","Bye","See you"];
		let fakeUsers = ["Ian","John","Mark"];
		for(let i = 0; i < fakeComments.length; i++) {
			this.reviews.push({"comment": fakeComments[i], "author": fakeUsers[i]});
		}
	}

	ngOnInit() {
	}

	onCommentSubmit() {
		if(this.name.valid && this.email.valid && this.comment.valid) {
			this.reviews.push({comment: this.comment.value, author: this.name.value});
		} else {
			console.warn('oh no review form not valid');
		}
	}

}
