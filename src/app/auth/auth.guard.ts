import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate
{
	constructor(private router: Router)
	{		
	}
	
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
	{
		if(localStorage.getItem("userToken") != null)
		{
			return true;
		}

		this.router.navigate(["/login"]);
		return false;
	}  
}
