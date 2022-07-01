import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs';
import { AuthService } from './core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authS: AuthService,    
   
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
    return this.authS.hasUser()
    .pipe(tap(user => console.log(user)),
      map(user => user === null ? false : true)
    );
  }
  
}
