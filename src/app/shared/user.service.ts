import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Response } from "@angular/http";
import { map } from "rxjs/operators";

//import "rxjs/add/operator/map";

import { User } from './user.model';

@Injectable({
	providedIn: 'root'
})

export class UserService
{
	readonly rootUrl = "http://localhost/UserRegistrationWebAPI/";
	constructor(private http: HttpClient) { }

	registerUser(user: User)
	{
		const body:
			User =
			{
				UserName: user.UserName,
				Password: user.Password,
				Email: user.Email,
				FirstName: user.FirstName,
				LastName: user.LastName
			}
		
		console.table(body);
		return this.http.post(this.rootUrl + "api/Accounts/Register", body);
	}

	userAuthentication(userName, password)
	{
		var data = "username=" + userName + "&" + "password=" + password + "&" + "grant_type=password";
		var requestHeader = new HttpHeaders
		(
			{
				"Content-Type": "application/x-www-form-urlencoded"
			}
		)
		
		return this.http.post(this.rootUrl + "token", data, {headers: requestHeader});
	}	

	getUserClaims()
	{
		return this.http.get(this.rootUrl + "api/Accounts/GetUserClaims", {headers: new HttpHeaders
		(
			{
				"Authorization": "bearer " + localStorage.getItem("userToken")
			}
		)});
	}
}
