import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/shareReplay'

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  login(username: string, password: string) {
    return this.http.post(environment.apiUrl + '/login', { username, password })
      .map(res => this.setSession(res.json()))
      .catch((error:any) => {
        if (error.status === 401) {
          return Observable.throw(error.json().message || 'Unauthorized')
        } else {
          return Observable.throw('Server error')
        }
      })
      .shareReplay();
  }

  private setSession(authResult) {
    localStorage.setItem('id_token', authResult.token);
  }

  logout() {
    localStorage.removeItem("id_token");
  }

  isLoggedIn() {
    //maybe check expiration here..
    return !!localStorage.getItem("id_token");
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

}
