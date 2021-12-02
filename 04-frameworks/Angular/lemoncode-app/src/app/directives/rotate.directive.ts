import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[rotate]',
})
export class RotateDirective {
  @Input('rotate') initialRotation: string = '0';
  @Input('step') step: string = '10';

  currentRotation: number = Number(this.initialRotation);

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.cursor = 'pointer';
    this.el.nativeElement.title = `Pulsa para rotar la imagen ${this.step} grados.`;

    this.rotate(Number(this.initialRotation));
    this.currentRotation = Number(this.initialRotation);
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (event.shiftKey) {
      this.currentRotation = this.currentRotation - Number(this.step);
      this.rotate(this.currentRotation);
    } else {
      this.currentRotation += Number(this.step);
      this.rotate(this.currentRotation);
    }
  }

  private rotate(deg: number) {
    if (this.el.nativeElement.tagName === 'IMG') {
      this.el.nativeElement.style.transform = `rotate(${deg}deg)`;
    }
  }
}
