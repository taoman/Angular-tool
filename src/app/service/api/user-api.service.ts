import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiBase } from '.';
import { combineLatest, of } from 'rxjs';
import {
  UserInterface,
  UserInfoInterface,
  UserRegister,
  ResponseInterface,
} from '../../interface/user-interface';

@Injectable({
  providedIn: 'root',
})
export class UserApiService extends ApiBase {
  constructor(private http: HttpClient) {
    super('/reUserCreate');
  }
  verifyUser(name: string) {
    return this.http.post<ResponseInterface>('/verifyUser', { name });
  }
  register(data: UserRegister) {
    return this.http.post<ResponseInterface>(this._baseUrl, { ...data });
  }
  login(data: UserRegister) {
    return this.http.post<UserInterface>('/reLogin', { ...data });
  }
}
