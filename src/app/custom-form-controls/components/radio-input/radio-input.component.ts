import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'hpt-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioInputComponent),
      multi: true
    }
  ]
})
export class RadioInputComponent implements ControlValueAccessor {

  @Input() field: AbstractControl;
  @Input() label: string;
  @Input() options: any[];
  @Input() showErrors: boolean;

  _value: any;
  propagateChange = (_: any) => {};

  get value(): any {
    return this._value;
  }

  set value(value: any) {
    this._value = value;
    this.propagateChange(this._value);
  }

  constructor() { }

  writeValue(obj: any): void {
    this._value = obj;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

}
