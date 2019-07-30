import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
	constructor(private router: Router)
	{		
	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
	{
		if(req.headers.get("No-Auth") == "True")
		{
			return next.handle(req.clone());
		}
		
		if(localStorage.getItem("userToken") != null)
		{
			const clonedRequest = req.clone
			(
				{
					headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem("userToken"))
				}
			);

			return next.handle(clonedRequest)
					   .tap
					   (
						   succ => {},
						   err =>
						   {
							   if(err.status === 401)
							   {
								   this.router.navigateByUrl("/login");
							   }
						   }
					   );
		}
	}	
}