import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './auth.service';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    public ngAuthService: AuthenticationService,
    public router: Router
  ){ }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this.ngAuthService.userData.pipe(
         take(1),
         map(user => !!user), // <-- map to boolean
         tap(loggedIn => {
           if (!loggedIn) {
             console.log('access denied');
             window.alert('Access denied, please sign-in');
             this.router.navigate(['/sign-in']);
           }
       })
  )
}
  
}