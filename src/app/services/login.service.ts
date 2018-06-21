import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { User } from '../models/user';
const API_URL = 'http://localhost:3000/v1';

@Injectable()
export class LoginService {
      constructor(private http: Http) {
  }
  login(user: User): Promise<boolean> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let promise = new Promise<boolean>((resolve, reject) => {
      this.http.post(API_URL + '/login', user, options).toPromise()
        .then(
          res => { // Success
            let body = res.json();
            if (body.data.token) {
              localStorage.setItem("auth", body.data.token)
              resolve(true);
            } else {
              reject(false);
            }
          },
      ).catch(() => {
        reject(false);
      })
    });
    return promise;
  }

}


