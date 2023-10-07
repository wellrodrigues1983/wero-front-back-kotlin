import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appCepMask]'
})
export class CepMaskDirective {

  constructor(private ngControl: NgControl) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, '');
    console.log(value)

    if (value.length === 8) {
      this.ngControl.control?.setValue(`${value.substring(0, 5)}-${value.substring(5, 8)}`);
    } else {
      this.ngControl.control?.setValue(value);
    }
  }

}
