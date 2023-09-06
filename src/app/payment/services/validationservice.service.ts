import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  letters: string = '^[A-Za-zs ]+$';
  numbers: string = '[0-9]{1,}';

  validateDate(control: AbstractControl): ValidationErrors | null {
    let inputValue = control.value;
    if (!inputValue) return null;
    if (inputValue.length > 0) {
      inputValue.trim();
      inputValue = inputValue.replace('/', '');
    }
    console.log(inputValue);

    // Validar el mes
    const month = parseInt(inputValue.substring(0, 2), 10);
    if (month < 1 || month > 12) {
      return { invalidMonth: true };
    }

    // validar fecha actual
    const currentDate = new Date();
    const year = parseInt(inputValue.substring(2, 4), 10);
    const currentYear = currentDate.getFullYear() % 100;
    if (
      year < currentYear ||
      (year === currentYear && month < currentDate.getMonth() + 1) // validamos con el mes
    ) {
      return { cardExpired: true };
    }
    return null;
  }
}
