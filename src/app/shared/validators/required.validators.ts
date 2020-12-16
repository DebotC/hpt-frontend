import { AbstractControl, ValidationErrors } from "@angular/forms";

export function required(control: AbstractControl): ValidationErrors {
    return !control.value || typeof control.value === 'string' && !control.value.trim() ?
        { required: true } : null;
}