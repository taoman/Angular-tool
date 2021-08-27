import { Injectable } from '@angular/core';
import { UserInfoInterface } from '../../interface/user-interface';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  setUserInfo(data: UserInfoInterface) {
    const JsonStr = JSON.stringify(data);
    localStorage.userInfo = JsonStr;
  }
  private get getUserInfo(): UserInfoInterface {
    const { token, name, id } = JSON.parse(localStorage.userInfo ?? '{}');
    return {
      // token: `Bearer ${token ?? ''}`,
      token: token ?? '',
      name: name ?? '',
      id: id ?? '',
    };
  }
  get token() {
    return this.getUserInfo.token;
  }
  get id() {
    return this.getUserInfo.id;
  }
}
