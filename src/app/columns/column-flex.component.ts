import { Component } from '@angular/core';
import { ColumnMode } from 'projects/ucrsdtnet-datatable/src/public-api';

@Component({
  selector: 'column-flex-demo',
  template: `
    <div>
      <h3>
        Flex Column Width Distribution
      </h3>
      <ucrsdtnet-datatable
        class="material"
        [columnMode]="ColumnMode.flex"
        [headerHeight]="50"
        [footerHeight]="50"
        rowHeight="auto"
        [rows]="rows"
      >
        <ucrsdtnet-datatable-column name="Name" [flexGrow]="3">
          <ng-template let-value="value" ucrsdtnet-datatable-cell-template>
            {{ value }}
          </ng-template>
        </ucrsdtnet-datatable-column>
        <ucrsdtnet-datatable-column name="Gender" [flexGrow]="1">
          <ng-template let-row="row" let-value="value" ucrsdtnet-datatable-cell-template>
            {{ value }}
          </ng-template>
        </ucrsdtnet-datatable-column>
        <ucrsdtnet-datatable-column name="Age" [flexGrow]="1">
          <ng-template let-value="value" ucrsdtnet-datatable-cell-template>
            {{ value }}
          </ng-template>
        </ucrsdtnet-datatable-column>
      </ucrsdtnet-datatable>
    </div>
  `
})
export class ColumnFlexComponent {
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
