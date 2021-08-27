import { Component, OnInit,Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import {SnackBarInterface} from '../../interface/user-interface'
@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.less']
})
export class SnackBarComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) private _props: SnackBarInterface) { }
  // openSnackBar(message: string, action: string) {
  //   this._snackBar.open(message, action);
  //   }
  get message(){
    return this._props.message
  }
  get icon(){
    let iconStr: string;
    switch (this._props.type) {
      case 'success':
        iconStr = 'check_circle';
        break;
      case 'warning':
        iconStr = 'warning';
        break;
      case 'fail':
        iconStr = 'error';
        break;

      default:
        iconStr = '';
        break;
    }
    return iconStr;
  }
  ngOnInit(): void {
  }

}
