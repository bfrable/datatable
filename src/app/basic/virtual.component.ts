import { Component } from '@angular/core';
import { ColumnMode } from 'projects/ucrsdtnet-datatable/src/public-api';

@Component({
  selector: 'virtual-scroll-demo',
  template: `
    <div>
      <h3>
        Virtual Scrolling with 10k Rows
      </h3>
      <ucrsdtnet-datatable
        class="material"
        [rows]="rows"
        [columnMode]="ColumnMode.force"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="getRowHeight"
        [scrollbarV]="true"
        (page)="onPage($event)"
      >
        <ucrsdtnet-datatable-column name="Name" [width]="300">
          <ng-template let-value="value" ucrsdtnet-datatable-cell-template>
            <strong>{{ value }}</strong>
          </ng-template>
        </ucrsdtnet-datatable-column>
        <ucrsdtnet-datatable-column name="Gender" [width]="300">
          <ng-template let-row="row" let-value="value" ucrsdtnet-datatable-cell-template>
            <i [innerHTML]="row['name']"></i> and <i>{{ value }}</i>
          </ng-template>
        </ucrsdtnet-datatable-column>
        <ucrsdtnet-datatable-column name="Row Height" prop="height" [width]="80"> </ucrsdtnet-datatable-column>
      </ucrsdtnet-datatable>
    </div>
  `
})
export class VirtualScrollComponent {
  rows;
  expanded = {};
  timeout: any;

  ColumnMode = ColumnMode;

  constructor() {
    this.fetch(data => {
      this.rows = data;
    });
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/100k.json`);

    req.onload = () => {
      const rows = JSON.parse(req.response);

      for (const row of rows) {
        row.height = Math.floor(Math.random() * 80) + 50;
      }

      cb(rows);
    };

    req.send();
  }

  getRowHeight(row) {
    return row.height;
  }
}
