import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';


import { AppComponent } from './app.component';
import { PageSameHeightComponent } from './page-same-height/page-same-height.component';
import { MatchHeightDirective } from './match-height.directive';


@NgModule({
  declarations: [
    AppComponent,
    PageSameHeightComponent,
    MatchHeightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GridModule,
    ExcelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
