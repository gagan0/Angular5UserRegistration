import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user.model';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { UserService } from '../../shared/user.service';
import { ToastrService } from "ngx-toastr";

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit
{
	user: User;
	emailPattern: String = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
	
	constructor(private userService: UserService, private toastrService: ToastrService) { }

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

	OnSubmit(userRegistrationForm: NgForm)
	{
		this.userService.registerUser(userRegistrationForm.value);

						// .subscribe((data: any) => 
						// {
						// 	if(data.success == true)
						// 	{
						// 		this.resetForm(userRegistrationForm);
								this.toastrService.success("Registration successful");
						// 	}
						//	else
						//	{
						// 		this.toastrService.error(data.Errors[0]);
						//	}
						// })
	}
}