import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
import {RecordInterface} from '../../interface/record-interface'
interface FormType{
  date:Date;
  amount:number;
  text:string
}
const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY MMM',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY MMMM',
  },
};
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class DialogComponent implements OnInit {
  date = new FormControl(moment());
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();
      // Highlight the 1st and 20th day of each month.
      // return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
    }
    return '';
  };
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogComponent>,
  ) {}

  ngOnInit(): void {
  }
  Form = this.formBuilder.group({
    date: '',
    amount: '',
    text: '',
  });
  onFormSubmit(): void {
    let data: FormType= {
      date: this.Form.value.date.format('yyyy-MM-DD'),
      amount: this.Form.value.amount,
      text: this.Form.value.text,
    };
    this.dialogRef.close(data);
  }
}
