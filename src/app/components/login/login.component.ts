import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { UserApiService } from '../../service/api/user-api.service';
import { AuthService } from '../../service/auth/auth.service';
import { SnackBarService } from '../../service/utils/snack-bar.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  animations: [
    trigger('slideStatus', [
      state(
        'open',
        style({
          // opacity: 1,
          // backgroundColor: '#6018DC'
        })
      ),
      state(
        'closed',
        style({
          opacity: 1,
          color: '#fff',
          borderRadius: '20px',
          backgroundColor: '#32CCBC',
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed=>open', [animate('0.5s')]),
    ]),
  ],
})
export class LoginComponent implements OnInit {
  hide = true;
  isOpen = true;
  vertify = false;
  nameStatus = false;
  psdStatus = false;
  tip = '';
  durationInSeconds = 5;
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  Form = this.formBuilder.group({
    name: '',
    psd: '',
  });
  constructor(
    private router: Router,
    private _snackBar: SnackBarService,
    private _userApi: UserApiService,
    private _authService: AuthService,
    private formBuilder: FormBuilder
  ) {}
  //填入用户名密码才可以注册
  get registerStatus() {
    let midStatus = [this.nameStatus, this.psdStatus];
    return midStatus.every((r) => r);
  }
  vertifyName() {
    const name = this.Form.value.name;
    if (name) this.nameStatus = true;
    this._userApi.verifyUser(name).subscribe((res) => {
      console.log(res.msg);
      if (res.code == 201) {
        this.vertify = true;
      } else {
        this.vertify = false;
      }
      this.tip = res.msg;
    });
  }
  vertifyPsd() {
    if (this.Form.value.psd) this.psdStatus = true;
  }
  register() {
    if(this.registerStatus && this.vertify){
      let data = this.Form.value;
      this._userApi.register(data).subscribe((res) => {
        if(res.code == 200){
          this._snackBar.success(res.msg)
          this.Form.reset()
        }else{
          this._snackBar.fail(res.msg)
        }
    });
    }
    
  }

  login() {
    let data = this.Form.value;
    this._userApi.login(data).subscribe((res) => {
      if (res.code == '200') {
        this._authService.setUserInfo(res.data[0]);
        this._snackBar.success(res.msg);
        this.router.navigate(['bill']);
      } else {
        this._snackBar.fail(res.msg);
      }
    });
  }
  ngOnInit(): void {
    console.log();
  }
}
