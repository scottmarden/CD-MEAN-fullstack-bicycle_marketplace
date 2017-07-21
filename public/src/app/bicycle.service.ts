import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'


@Injectable()
export class BicycleService {

  constructor(private _http: Http) { }

	serviceGetListings(){
		return this._http.get('/api/browse').map(response => response.json()).toPromise()
	}

	serviceCreateListing(bicycle){
		return this._http.post('/api/createListing', bicycle).map(response => response.json()).toPromise()
	}

}
