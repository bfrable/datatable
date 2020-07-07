import { Component } from '@angular/core';
import { ColumnMode } from 'projects/ucrsdtnet-datatable/src/public-api';

@Component({
  selector: 'footer-demo',
  template: `
    <div>
      <h3>
        Custom Footer
      </h3>
      <ucrsdtnet-datatable
        class="material"
        [rows]="rows"
        [columns]="columns"
        [columnMode]="ColumnMode.force"
        [footerHeight]="100"
        [headerHeight]="50"
        rowHeight="auto"
      >
        <ucrsdtnet-datatable-footer *ngIf="true">
          <ng-template
            ucrsdtnet-datatable-footer-template
            let-rowCount="rowCount"
            let-pageSize="pageSize"
            let-selectedCount="selectedCount"
            let-curPage="curPage"
            let-offset="offset"
          >
            <div style="padding: 5px 10px">
              <div><strong>Summary</strong>: Gender: Female</div>
              <hr style="width:100%" />
              <div>Rows: {{ rowCount }} | Size: {{ pageSize }} | Current: {{ curPage }} | Offset: {{ offset }}</div>
            </div>
          </ng-template>
        </ucrsdtnet-datatable-footer>
      </ucrsdtnet-datatable>
    </div>
  `
})
export class FooterDemoComponent {
  rows = [];

  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];

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
