import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { ValidationMessageComponent } from './components/validation-message/validation-message.component';
import { RadioInputComponent } from './components/radio-input/radio-input.component';

@NgModule({
  declarations: [InputComponent, ValidationMessageComponent, RadioInputComponent],
  exports: [InputComponent, RadioInputComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CustomFormControlsModule { }
