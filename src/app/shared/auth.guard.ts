// import { CanActivateFn,Router,RouterStateSnapshot,ActivatedRouteSnapshot,UrlTree} from '@angular/router';
// import { Inject, Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// // Injectable({
// //   providedIn:'root'
// // })

// export const AuthGuard: CanActivateFn = (route:RouterStateSnapshot,
//    state:ActivatedRouteSnapshot
//   ) => {
//   if(localStorage.getItem('loginData')){
//     return true
//   } else{

//   }
//   return true;
// };
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router) {
 
  }
 
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean|UrlTree {
              
        if(localStorage.getItem('loginData')){
          return true;
        } 
        else{
          this.router.navigate(["/"])
          alert("you cant access this page without login")
          return false;
        }
  }
  
}
