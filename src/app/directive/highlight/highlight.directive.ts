import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() color = 'orange';
  @Input('appHighlight') bgColor: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseover')
  public over(): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
    if (this.bgColor) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', this.bgColor);
    }
  }

  @HostListener('mouseout')
  public out(): void {
    this.renderer.removeStyle(this.el.nativeElement, 'color');
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }

}
