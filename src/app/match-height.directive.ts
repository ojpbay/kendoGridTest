import { Directive, ElementRef, AfterViewChecked, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appMatchHeight]'
})
export class MatchHeightDirective implements AfterViewChecked {

  @Input()
  myMatchHeight: string;

  constructor(private el: ElementRef) {
  }

  ngAfterViewChecked() {
    // call our matchHeight function here later
  }

  matchHeight(parent: HTMLElement, className: string) {
    // match height logic here

    if (!parent) {
      return;
    }

    // find all child elements with the selected class name
    const children = parent.getElementsByClassName(className);

    if (!children) {
      return;
    }
  }

}
