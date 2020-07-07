import { Component } from '@angular/core';
import { ColumnMode } from 'projects/ucrsdtnet-datatable/src/public-api';

@Component({
  selector: 'column-force-demo',
  template: `
    <div>
      <h3>
        Force Fill Column Width Distribution
      </h3>
      <ucrsdtnet-datatable
        class="material"
        [columnMode]="ColumnMode.force"
        [headerHeight]="50"
        [footerHeight]="50"
        rowHeight="auto"
        [rows]="rows"
      >
        <ucrsdtnet-datatable-column name="Name" [width]="100">
          <ng-template let-value="value" ucrsdtnet-datatable-cell-template>
            {{ value }}
          </ng-template>
        </ucrsdtnet-datatable-column>
        <ucrsdtnet-datatable-column name="Gender" [width]="100">
          <ng-template let-row="row" let-value="value" ucrsdtnet-datatable-cell-template>
            {{ value }}
          </ng-template>
        </ucrsdtnet-datatable-column>
        <ucrsdtnet-datatable-column name="Age" [width]="300">
          <ng-template let-value="value" ucrsdtnet-datatable-cell-template>
            {{ value }}
          </ng-template>
        </ucrsdtnet-datatable-column>
      </ucrsdtnet-datatable>
    </div>
  `
})
export class ColumnForceComponent {
  rows = [];

  ColumnMode = ColumnMode;

  constructor() {
    this.fetch(data => {
      this.rows = data.splice(0, 5);
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
}
