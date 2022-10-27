import { Injectable } from '@angular/core';
import { User } from 'src/app/@shared';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    singIn(user: User) {
        sessionStorage.setItem('token', user.token);
    }

    loggedIn() {
        if (sessionStorage.getItem('token')) return true;
        else return false;
    }

    getToken() {
        return sessionStorage.getItem('token');
    }

    logout() {
        sessionStorage.removeItem('token');
    }

}