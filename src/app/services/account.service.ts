import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AccountCredentials } from '../models/account-credentials';
import { Observer } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccountService {
  loginUrl: string = environment.apiUrl + '/token/';

  constructor(private http: HttpClient) { }

  login(model: AccountCredentials) {
    return this.http.post(this.loginUrl, model);
  }
}