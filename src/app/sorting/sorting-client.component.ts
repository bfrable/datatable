import { Component } from '@angular/core';
import { ColumnMode, SortType } from 'projects/ucrsdtnet-datatable/src/public-api';

@Component({
  selector: 'client-sorting-demo',
  template: `
    <div>
      <h3>
        Client-side Sorting
      </h3>
      <ucrsdtnet-datatable
        class="material"
        [rows]="rows"
        [columns]="columns"
        [sortType]="SortType.multi"
        [columnMode]="ColumnMode.force"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="50"
        [scrollbarV]="true"
      >
      </ucrsdtnet-datatable>
    </div>
  `
})
export class ClientSortingComponent {
  rows = [];

  columns = [{ name: 'Company' }, { name: 'Name' }, { name: 'Gender' }];

  ColumnMode = ColumnMode;
  SortType = SortType;

  constructor() {
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