import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) { 
    this.setBorder('#cdcadb');
    this.setHeight(300);
    this.setCustomCursor();
  }

  // ca2a1c

  @HostListener ('mouseenter') onMouseEnter (){
    this.setBorder('#ca2a1c');
  }

  @HostListener ('mouseleave') onMouseLeave (){
    this.setBorder('#cdcadb');
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder (color: string){
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

  setCustomCursor () {
    this.el.nativeElement.style.cursor = 'pointer';
  }

}
