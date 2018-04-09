import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-same-height',
  templateUrl: './page-same-height.component.html',
  styleUrls: ['./page-same-height.component.css']
})
export class PageSameHeightComponent {

  constructor() { }

  public list: any[]  = [
    {
        title: 'Selangor',
        content: 'Selangor is a state ....'
    },
    {
        title: 'Kuala Lumpur',
        content: 'Kuala Lumpur is the capital of Malaysia... Kuala Lumpur is the capital of Malaysia... Kuala Lumpur is the capital of Malaysia... Kuala Lumpur is the capital of Malaysia...'
    },
    {
        title: 'Perak',
        content: 'Perak is a state in the northwest of Peninsular Malaysia...'
    }
  ];

}
