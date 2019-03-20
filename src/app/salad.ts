

export class Salad {


	name :string;

	constructor(name:string, public base :string, public body :string[], public cheese :string, public seasoning :string, public price :number) {
		this.name = (name)?name:'Custom made salad';
	}

	

	get description() {
		return (this.name)?this.name:'Custom made salad'
			+ ' - ' + this.body.join(',') + ' and ' + this.cheese 
			+ ', seasoned with ' + this.seasoning;
	}
}
