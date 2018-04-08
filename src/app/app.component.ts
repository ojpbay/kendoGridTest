import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { products } from './products';

import { GridModule, GridDataResult, DataStateChangeEvent, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy, process, State } from '@progress/kendo-data-query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    'styles.scss'
],
encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  title = 'kendo grid eval';
  public gridData: any[] = products.slice(0, 30);
  public gridView: GridDataResult;

  public sort: SortDescriptor[] = [{
    field: 'ProductID',
    dir: 'asc'
  }];

  public state: State = {
    // Initial filter descriptor
    filter: {
      logic: 'and',
      filters: []
    }
  };

  constructor() {}

  ngOnInit(): void {
    this.loadData();
  }

  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadData();
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridView = process(this.gridData, this.state);
  }

  private loadData(): void {
    var data = orderBy(this.gridData, this.sort);

    console.log('data length ' + data.length + ' items');

    // data: this.data.slice(this.skip, this.skip + this.pageSize),
    this.gridView = {
        data: data,
        total: this.gridData.length
    };
  }
}
