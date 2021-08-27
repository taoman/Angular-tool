import { Injectable } from '@angular/core';
import {MatSnackBar,MatSnackBarConfig,MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {SnackBarInterface} from '../../interface/user-interface'
import {SnackBarComponent} from '../../components/snack-bar/snack-bar.component'
export namespace AppSnackBarServiceType {
  export type Config = Omit<MatSnackBarConfig<SnackBarInterface>, 'data'>;
}

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _matSnackBar: MatSnackBar) { }
    open(message: string, action = '关闭', config?: MatSnackBarConfig) {
      this._matSnackBar.open(message, action, config);
    }
    success(message: string, config?: AppSnackBarServiceType.Config){
      const snackBarData: SnackBarInterface = {
        type: 'success',
        message,
      };
      this.openSnackBar(snackBarData,config)
    }
    fail(message: string, config?: AppSnackBarServiceType.Config){
      const snackBarData: SnackBarInterface = {
        type: 'fail',
        message,
      };
      this.openSnackBar(snackBarData,config)
    }
    warning(message: string, config?: AppSnackBarServiceType.Config){
      const snackBarData: SnackBarInterface = {
        type: 'warning',
        message,
      };
      this.openSnackBar(snackBarData,config)
    }
    private openSnackBar(data:SnackBarInterface,config?: AppSnackBarServiceType.Config){
      this._matSnackBar.openFromComponent(SnackBarComponent,{
        ...config,
        panelClass: `app-snack-bar--${data.type}`,
        data,
      })
    }
}
