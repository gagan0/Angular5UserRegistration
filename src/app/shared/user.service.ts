import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable } from "rxjs";

//import "rxjs/add/operator/map";
import { User } from './user.model';

@Injectable({
	providedIn: 'root'
})

export class UserService
{
	readonly rootUrl = "http://localhost:2020";
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
		// return this.http.post(this.rootUrl + "api/User/Register", body);
	}
}
