import { Component, OnInit } from '@angular/core';
import { BicycleService } from '.././bicycle.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-my-listings',
	templateUrl: './my-listings.component.html',
	styleUrls: ['./my-listings.component.css']
})
export class MyListingsComponent implements OnInit {

	newBicycle: any ={
		title: null,
		description: null,
		price: null,
		location: null,
		user_email: localStorage.user,
	}


	constructor(
		private _bicycleService: BicycleService,
		private _router: Router,
	) { }

	ngOnInit() {
	}

	addBike(){
		this._bicycleService.serviceCreateListing(this.newBicycle)
			.then( response => {
				console.log("Success: ", response)
			})
			.catch( err => {
				console.log("Error: ", err)
			})
	}

	logout(){
		localStorage.clear()
		this._router.navigate(['/'])
	}
}
