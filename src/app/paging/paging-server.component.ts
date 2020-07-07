import { Component } from '@angular/core';
import { MockServerResultsService } from './mock-server-results-service';
import { CorporateEmployee } from './model/corporate-employee';
import { Page } from './model/page';
import { ColumnMode } from 'projects/ucrsdtnet-datatable/src/public-api';

@Component({
  selector: 'server-paging-demo',
  providers: [MockServerResultsService],
  template: `
    <div>
      <h3>
        Server-side Paging
      </h3>
      <ucrsdtnet-datatable
        class="material"
        [rows]="rows"
        [columns]="[{ name: 'Name' }, { name: 'Gender' }, { name: 'Company' }]"
        [columnMode]="ColumnMode.force"
        [headerHeight]="50"
        [footerHeight]="50"
        rowHeight="auto"
        [externalPaging]="true"
        [count]="page.totalElements"
        [offset]="page.pageNumber"
        [limit]="page.size"
        (page)="setPage($event)"
      >
      </ucrsdtnet-datatable>
    </div>
  `
})
export class ServerPagingComponent {
  page = new Page();
  rows = new Array<CorporateEmployee>();

  ColumnMode = ColumnMode;

  constructor(private serverResultsService: MockServerResultsService) {
    this.page.pageNumber = 0;
    this.page.size = 20;
  }

  ngOnInit() {
    this.setPage({ offset: 0 });
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    this.serverResultsService.getResults(this.page).subscribe(pagedData => {
      this.page = pagedData.page;
      this.rows = pagedData.data;
    });
  }
}
