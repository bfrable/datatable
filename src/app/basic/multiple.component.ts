import { Component } from '@angular/core';
import { ColumnMode } from 'projects/ucrsdtnet-datatable/src/public-api';

@Component({
  selector: 'multiple-tables-demo',
  template: `
    <div>
      <h3>
        Multiple Tables
      </h3>
      <ucrsdtnet-datatable
        class="material"
        [rows]="rows1"
        [columns]="columns1"
        [columnMode]="ColumnMode.force"
        [headerHeight]="50"
        [footerHeight]="0"
        [rowHeight]="100"
      >
      </ucrsdtnet-datatable>
      <br />
      <ucrsdtnet-datatable
        class="material"
        [rows]="rows2"
        [columns]="columns2"
        [headerHeight]="50"
        [footerHeight]="50"
        rowHeight="auto"
      >
      </ucrsdtnet-datatable>
    </div>
  `
})
export class MultipleTablesComponent {
  columns1 = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];

  columns2 = [{ prop: 'name', name: 'Name' }, { name: 'Gender' }];

  rows1 = [
    { name: 'Larry', gender: 'Male', company: 'Cisco' },
    { name: 'Lauren', gender: 'Female', company: 'HP' }
  ];

  rows2 = [
    { name: 'Callie', gender: 'Female' },
    { name: 'Maggie', gender: 'Female' }
  ];

  ColumnMode = ColumnMode;
}
