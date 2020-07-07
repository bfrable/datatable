import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ucrsdtnet-datatable-tree-toggle]' })
export class DataTableColumnCellTreeToggle {
  constructor(public template: TemplateRef<any>) {}
}
