import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSameHeightComponent } from './page-same-height.component';

describe('PageSameHeightComponent', () => {
  let component: PageSameHeightComponent;
  let fixture: ComponentFixture<PageSameHeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSameHeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSameHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
