import { Component } from '@angular/core';
import { ColumnMode } from 'projects/ucrsdtnet-datatable/src/public-api';

@Component({
  selector: 'full-screen-demo',
  template: `
    <div>
      <h3>
        Full Screen
      </h3>
      <ucrsdtnet-datatable
        class="material fullscreen"
        style="top: 52px"
        [columnMode]="ColumnMode.force"
        [headerHeight]="50"
        [footerHeight]="0"
        [rowHeight]="50"
        [scrollbarV]="true"
        [scrollbarH]="true"
        [rows]="rows"
      >
        <ucrsdtnet-datatable-column name="Id" [width]="80"></ucrsdtnet-datatable-column>
        <ucrsdtnet-datatable-column name="Name" [width]="300"></ucrsdtnet-datatable-column>
        <ucrsdtnet-datatable-column name="Gender"></ucrsdtnet-datatable-column>
        <ucrsdtnet-datatable-column name="Age"></ucrsdtnet-datatable-column>
        <ucrsdtnet-datatable-column name="City" [width]="300" prop="address.city"></ucrsdtnet-datatable-column>
        <ucrsdtnet-datatable-column name="State" [width]="300" prop="address.state"></ucrsdtnet-datatable-column>
      </ucrsdtnet-datatable>
    </div>
  `
})
export class FullScreenComponent {
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
