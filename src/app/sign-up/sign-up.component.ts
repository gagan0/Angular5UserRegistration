import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit
{
	user: User;

	constructor() { }

	ngOnInit()
	{
		this.resetUserData();
		this.resetForm();
	}

	resetUserData()
	{
		this.user =
		{
			UserName: "",
			Password: "",
			Email: "",
			FirstName: "",
			LastName: ""
		};
	}

	resetForm(form?: NgForm)
	{
		if(form == null)
		{
			return;
		}
		
		form.reset();
	}
}