import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input('appResaltado') color: string;

  constructor(private element: ElementRef) {
  }

  @HostListener('mouseenter') mouseEnter(): void{
    this.resaltar(this.color || 'yellow');
  }
  @HostListener('mouseleave') mouseLeave(): void{
    this.resaltar(null);
  }

  private resaltar(color: string): void {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
