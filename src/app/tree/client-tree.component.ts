import { Component } from '@angular/core';
import { ColumnMode } from 'projects/ucrsdtnet-datatable/src/public-api';

@Component({
  selector: 'client-side-tree-demo',
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
        [treeFromRelation]="'manager'"
        [treeToRelation]="'name'"
        [rows]="rows"
        (treeAction)="onTreeAction($event)"
      >
        <ucrsdtnet-datatable-column name="Name" [flexGrow]="3" [isTreeColumn]="true">
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
  `,
  styles: ['.icon {height: 10px; width: 10px; }', '.disabled {opacity: 0.5; }']
})
export class ClientTreeComponent {
  rows = [];

  ColumnMode = ColumnMode;

  constructor() {
    this.fetch(data => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company_tree.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  onTreeAction(event: any) {
    const index = event.rowIndex;
    const row = event.row;
    if (row.treeStatus === 'collapsed') {
      row.treeStatus = 'expanded';
    } else {
      row.treeStatus = 'collapsed';
    }
    this.rows = [...this.rows];
  }
}
