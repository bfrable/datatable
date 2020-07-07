import { Component } from '@angular/core';
import { ColumnMode } from 'projects/ucrsdtnet-datatable/src/public-api';

@Component({
  selector: 'dynamic-height-demo',
  template: `
    <div>
      <h3>
        Dynamic Height w/ Virtual Scrolling
      </h3>
      <ucrsdtnet-datatable
        class="material"
        [rows]="rows"
        [columnMode]="ColumnMode.force"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="getRowHeight"
        [scrollbarV]="true"
      >
        <ucrsdtnet-datatable-column name="Name"></ucrsdtnet-datatable-column>
        <ucrsdtnet-datatable-column name="Gender"></ucrsdtnet-datatable-column>
        <ucrsdtnet-datatable-column name="Row Height" prop="height"></ucrsdtnet-datatable-column>
      </ucrsdtnet-datatable>
    </div>
  `
})
export class DynamicHeightComponent {
  rows = [];
  expanded = {};
  timeout: any;

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
      const rows = JSON.parse(req.response).splice(0, 100);

      for (const row of rows) {
        row.height = Math.floor(Math.random() * 80) + 50;
      }

      cb(rows);
    };

    req.send();
  }

  getRowHeight(row) {
    console.log('ROW', row);
    if (!row) {
      return 50;
    }
    if (row.height === undefined) {
      return 50;
    }
    return row.height;
  }
}
