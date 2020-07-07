import { Component, OnInit } from '@angular/core';
import { ColumnMode } from 'projects/ucrsdtnet-datatable/src/public-api';

@Component({
  selector: 'default-sorting-demo',
  template: `
    <div>
      <h3>
        Client-side Sorting
      </h3>
      <ucrsdtnet-datatable
        class="material"
        [rows]="rows"
        [columnMode]="ColumnMode.force"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="50"
        [scrollbarV]="true"
        [sorts]="[{ prop: 'name', dir: 'desc' }]"
      >
        <ucrsdtnet-datatable-column name="Company">
          <ng-template let-row="row" ucrsdtnet-datatable-cell-template>
            {{ row.company }}
          </ng-template>
        </ucrsdtnet-datatable-column>

        <ucrsdtnet-datatable-column name="Name">
          <ng-template let-row="row" ucrsdtnet-datatable-cell-template>
            {{ row.name }}
          </ng-template>
        </ucrsdtnet-datatable-column>

        <ucrsdtnet-datatable-column name="Gender"> </ucrsdtnet-datatable-column>
      </ucrsdtnet-datatable>
    </div>
  `
})
export class DefaultSortingComponent implements OnInit {
  rows = [];

  ColumnMode = ColumnMode;

  ngOnInit() {
    this.fetch(data => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data);
    };

    req.send();
  }
}
