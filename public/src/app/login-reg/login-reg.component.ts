import { Component, OnInit } from '@angular/core';
import { UserService } from '.././user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login-reg',
	templateUrl: './login-reg.component.html',
	styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {

	user: any = {
		first_name: null,
		last_name: null,
		email: null,
		password: null,
		pw_confirm: null
	}

	credentials: any = {
		email: null,
		password: null,
	}

	dbErrors: any = null;
	loginErrors: any = null;

	constructor(
		private _userService: UserService,
		private _router: Router
	) { }

	ngOnInit() {
		if(localStorage.user){
			this._router.navigate(['/browse'])
		}
	}

	registerUser(user){
		event.preventDefault()
		this._userService.serviceRegisterUser(user)
			.then( response => {
				console.log("Success: ", response)
				localStorage.setItem("user", response.email)
				this._router.navigate(['/browse'])
			})
			.catch( err => {
				console.log("Errors: ", err)
				this.dbErrors = "Bad DB call"
			})
	}

	loginUser(credentials){
		event.preventDefault()
		this._userService.serviceLoginUser(credentials)
			.then( response => {
				console.log("Success ", response)
				localStorage.setItem("user", response.email)
				this._router.navigate(['/browse'])
			})
			.catch( err => {
				console.log("Errors: ", err)
				this.loginErrors = "Bad DB Call"
			})
	}

}
