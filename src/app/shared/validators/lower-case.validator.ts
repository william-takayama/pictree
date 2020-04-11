import { AbstractControl } from '@angular/forms';

export function lowerCaseValidator(control: AbstractControl) {
    // if is not empty & doesn't follow regexp rule
    if(control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
        return { lowerCase: true }
    }
    return null;
}