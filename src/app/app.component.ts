import { Component, ViewEncapsulation } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, Location } from '@angular/common';
import packageInfo from 'projects/ucrsdtnet-datatable/package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss',
    '../../projects/ucrsdtnet-datatable/src/lib/themes/material.scss'
  ],
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
})
export class AppComponent {
  state: any;

  version = packageInfo.version;

  constructor(location: Location) {
    this.state = location.path(true);
  }
}
