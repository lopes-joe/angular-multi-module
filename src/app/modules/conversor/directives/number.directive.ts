import { Directive, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[number]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumberDirective,
    multi: true
  }]
})
export class NumberDirective implements ControlValueAccessor {
  onTouched: any;
  onChange: any;

  constructor(private el: ElementRef) { }

  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    let value = $event.target.value;
    let decimalPosition = value.indexOf('.');
    value = value.replace(/[\D]/g, '');
    if (decimalPosition > 0) {
      value = value.substr(0, decimalPosition) + '.' +
      value.substr(decimalPosition);
    }
    $event.target.value = value;
    this.onChange(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.el.nativeElement.value = value;
  }

}
