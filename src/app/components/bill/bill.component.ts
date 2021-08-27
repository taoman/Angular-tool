import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { AuthService } from '../../service/auth/auth.service';
import { RecordApiService } from '../../service/api/record-api.service';
import { SnackBarService } from '../../service/utils/snack-bar.service';
export interface PeriodicElement {
  date: string;
  // position: number;
  amount: number;
  text: string;
}
const ELEMENT_DATA: PeriodicElement[] = [];

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.less'],
})
export class BillComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private _authService: AuthService,
    private _recordApi: RecordApiService,
    private _snackBar: SnackBarService,
  ) {}
  displayedColumns: string[] = ['date', 'amount', 'text'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
    this.index()
  }
  signOut(){
    this.router.navigate(['login'])
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {});
    dialogRef.afterClosed().subscribe((res) => {
      res.user_id = this.user_id;
      this._recordApi.store(res).subscribe((res) => {
        if(res.code == 200){
          this._snackBar.success(res.msg)
          this.index()
        }else{
          this._snackBar.fail(res.msg)
        }
      });
    });
  }
  get user_id() {
    return this._authService.id;
  }
  index() {
    this._recordApi.index(this.user_id).subscribe((res) => {
      this.dataSource = res.data
    });
  }
}
