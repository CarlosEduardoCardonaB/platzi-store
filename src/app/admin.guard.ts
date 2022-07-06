import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs';
import { AuthService } from './core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authS: AuthService,
    private router: Router    
   
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
    // return this.authS.hasUser()
    // .pipe(tap(hasUser => console.log(hasUser)), //con tap se genera una intersección para imprimir en ese momento por consola por ejemplo
    //   map(user => user === null ? false : true) //con el map podemos cambiar la variable a un booleano
    // );

    return this.authS.hasUser()
    .pipe(map(user => user === null ? false : true),
    tap((hasUser => {
      if(!hasUser){
        this.router.navigate(['/loggin']);
      }
    })) 
    );


  }
  
}
