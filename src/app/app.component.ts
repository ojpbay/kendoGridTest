import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { products } from './products';

import { GridModule, GridDataResult, DataStateChangeEvent, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy, process, State } from '@progress/kendo-data-query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [    
    'styles.scss',
    './app.component.css'
],
encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  title = 'kendo grid eval';
  public gridData: any[] = this.createRandomData(50);
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

  private createRandomData(count: number): any[] {
    const teamNames = ['Marine', 'Financial Solutions'],
        programmeNames = ['Thoughtsphere Shipping - 2018', 'Evergreen Ltd', 'BW International - 2018', 'Demo Associates - Delta'],
        clientNames = ['Thoughtsphere Shipping', 'Evergreen Ltd', 'Blue Water', 'D.A. Ltd'],
        references = ['REF', 'ACC-', 'RN', 'MRU'];

    return Array(count).fill({}).map((_, idx) => ({
        key: 'ba8963ea-bb7e-46ab-b9d7-e0ae9a2d6b69',
        team: teamNames[Math.floor(Math.random() * teamNames.length)],
        programme: programmeNames[Math.floor(Math.random() * programmeNames.length)],
        clientName: clientNames[Math.floor(Math.random() * clientNames.length)],
        reference: references[Math.floor(Math.random() * references.length)] + Math.floor((Math.random() * 999999) + 100000).toString(),
        dateCreated: new Date(new Date(2018, 1, 1).getTime() + Math.random() * (new Date(2018, 6, 6).getTime() - new Date(2018, 1, 1).getTime()))
    })
    );
}
}
