import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[subrayado]'
})
export class SubrayadoDirective {

  color: string;

  constructor(private element: ElementRef) {
    this.color = 'red';
    element.nativeElement.style.textDecoration = 'underline';
  }

  @HostListener('mouseover') onHover() {
    setInterval(() => {
      if (this.color === 'red') {
        this.element.nativeElement.style.backgroundColor = 'green';
        this.color = 'green';
      } else {
        this.element.nativeElement.style.backgroundColor = 'red';
        this.color = 'red';
      }
    }, 1000);
  }

}