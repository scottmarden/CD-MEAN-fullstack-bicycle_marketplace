import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BicycleService } from '.././bicycle.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

	user = localStorage.getItem("user")
	listings: Array<any> = []

	constructor(
		private _bicycleService: BicycleService,
		private _router: Router
	) { }

	ngOnInit() {
		if(!localStorage.user){
			this._router.navigate(['/'])
		}
		console.log("local storage: ", localStorage)
		this.getAllListings();
	}

	logout(){
		localStorage.clear()
		this._router.navigate(['/'])
	}

	getAllListings(){
		this._bicycleService.serviceGetListings()
			.then( listings => {
				console.log("Response: ", listings)
				this.listings = listings;

			})
			.catch( err =>{
				console.log("Errors: ", err)
			})
	}

}
