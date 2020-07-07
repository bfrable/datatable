import { Component } from '@angular/core';
import { ColumnMode } from 'projects/ucrsdtnet-datatable/src/public-api';

@Component({
  selector: 'column-pinning-demo',
  template: `
    <div>
      <h3>
        Column Pinning
      </h3>
      <ucrsdtnet-datatable
        class="material"
        [columnMode]="ColumnMode.force"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="50"
        [scrollbarV]="true"
        [scrollbarH]="true"
        [rows]="rows"
      >
        <ucrsdtnet-datatable-column name="Name" [width]="300" [frozenLeft]="true"> </ucrsdtnet-datatable-column>
        <ucrsdtnet-datatable-column name="Gender"> </ucrsdtnet-datatable-column>
        <ucrsdtnet-datatable-column name="Age"> </ucrsdtnet-datatable-column>
        <ucrsdtnet-datatable-column name="City" [width]="150" prop="address.city"> </ucrsdtnet-datatable-column>
        <ucrsdtnet-datatable-column name="State" [width]="300" prop="address.state" [frozenRight]="true">
        </ucrsdtnet-datatable-column>
      </ucrsdtnet-datatable>
    </div>
  `
})
export class ColumnPinningComponent {
  rows = [];

  ColumnMode = ColumnMode;

  constructor() {
    this.fetch(data => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/100k.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
}
