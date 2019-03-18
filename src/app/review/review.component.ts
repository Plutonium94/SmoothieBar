import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

import { Review } from '../review';

@Component({
	selector: 'app-review',
	templateUrl: './review.component.html',
	styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

	name: FormControl = new FormControl('');
	email :FormControl = new FormControl('');
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
		this.reviews.push({comment: this.comment.value, author: this.name.value});
	}

}
