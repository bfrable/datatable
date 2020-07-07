import { Component } from '@angular/core';
import { ColumnMode } from 'projects/ucrsdtnet-datatable/src/public-api';

@Component({
  selector: 'column-toggle-demo',
  template: `
    <div>
      <h3>
        Column Toggling
      </h3>
      <div style="float:left;width:75%">
        <ucrsdtnet-datatable
          class="material"
          [rows]="rows"
          [columnMode]="ColumnMode.force"
          [headerHeight]="50"
          [footerHeight]="50"
          rowHeight="auto"
        >
          <ucrsdtnet-datatable-column *ngFor="let col of columns" [name]="col.name"> </ucrsdtnet-datatable-column>
        </ucrsdtnet-datatable>
      </div>
      <div class="selected-column">
        <h4>Available Columns</h4>
        <ul>
          <li *ngFor="let col of allColumns">
            <input type="checkbox" [id]="col.name" (click)="toggle(col)" [checked]="isChecked(col)" />
            <label [attr.for]="col.name">{{ col.name }}</label>
          </li>
        </ul>
      </div>
    </div>
  `
})
export class ColumnToggleComponent {
  rows = [
    {
      name: 'Claudine Neal',
      gender: 'female',
      company: 'Sealoud'
    },
    {
      name: 'Beryl Rice',
      gender: 'female',
      company: 'Velity'
    }
  ];

  columns = [{ name: 'Name' }, { name: 'Gender' }, { name: 'Company' }];

  allColumns = [{ name: 'Name' }, { name: 'Gender' }, { name: 'Company' }];

  ColumnMode = ColumnMode;

  toggle(col) {
    const isChecked = this.isChecked(col);

    if (isChecked) {
      this.columns = this.columns.filter(c => {
        return c.name !== col.name;
      });
    } else {
      this.columns = [...this.columns, col];
    }
  }

  isChecked(col) {
    return (
      this.columns.find(c => {
        return c.name === col.name;
      }) !== undefined
    );
  }
}
