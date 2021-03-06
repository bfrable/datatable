import { Component } from '@angular/core';
import { ColumnMode } from 'projects/ucrsdtnet-datatable/src/public-api';

@Component({
  selector: 'tabs-demo',
  template: `
    <div>
      <h3>
        Hidden By Default
      </h3>

      <div style="width:75%;margin:0 auto">
        <div>
          <button type="button" (click)="tab1 = true; tab2 = false; tab3 = false">Nothing</button>
          <button type="button" (click)="tab2 = true; tab1 = false; tab3 = false">Hidden</button>
          <button type="button" (click)="tab3 = true; tab1 = false; tab2 = false">NgIf</button>
        </div>

        <div [hidden]="!tab1">
          <p>Click a button to toggle table visibilities</p>
        </div>

        <div [hidden]="!tab2">
          <h4>hidden Table</h4>
          <ucrsdtnet-datatable
            class="material"
            [rows]="rows"
            [columnMode]="ColumnMode.force"
            [headerHeight]="50"
            [footerHeight]="50"
            [rowHeight]="50"
            [scrollbarV]="true"
          >
            <ucrsdtnet-datatable-column name="Name" [width]="200"></ucrsdtnet-datatable-column>
            <ucrsdtnet-datatable-column name="Gender" [width]="300"></ucrsdtnet-datatable-column>
            <ucrsdtnet-datatable-column name="Age" [width]="80"></ucrsdtnet-datatable-column>
          </ucrsdtnet-datatable>
        </div>

        <div *ngIf="tab3">
          <h4>ngIf Table</h4>
          <ucrsdtnet-datatable
            class="material"
            [rows]="rows"
            [columnMode]="ColumnMode.force"
            [headerHeight]="50"
            [footerHeight]="50"
            [rowHeight]="50"
            [scrollbarV]="true"
          >
            <ucrsdtnet-datatable-column name="Name" [width]="200"></ucrsdtnet-datatable-column>
            <ucrsdtnet-datatable-column name="Gender" [width]="300"></ucrsdtnet-datatable-column>
            <ucrsdtnet-datatable-column name="Age" [width]="80"></ucrsdtnet-datatable-column>
          </ucrsdtnet-datatable>
        </div>
      </div>
    </div>
  `
})
export class TabsDemoComponent {
  rows = [];

  tab1 = true;
  tab2 = false;
  tab3 = false;

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
