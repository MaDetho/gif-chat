import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router) { }
 
    canActivate() {
        if (localStorage.getItem('id_token')) {

            //Maybe also check for expiration..
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}