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

    // Eliminar espacios en blanco y barras diagonales si están presentes
    inputValue = inputValue.replace(/\s+/g, '').replace('/', '');

    if (!inputValue) return null;

    // Validar que la longitud de la entrada sea de exactamente 4 caracteres (MMYY)
    if (inputValue.length !== 4) {
      return { invalidFormat: true };
    }

    // Validar el mes
    const month = parseInt(inputValue.substring(0, 2), 10);
    if (month < 1 || month > 12) {
      return { invalidMonth: true };
    }

    // Obtener el año actual en formato de dos dígitos (YY)
    const currentYear = new Date().getFullYear() % 100;

    // Obtener el año de expiración en formato de dos dígitos (YY)
    const year = parseInt(inputValue.substring(2, 4), 10);

    // Calcular el año límite superior para la tarjeta (20 años en el futuro)
    const upperLimitYear = currentYear + 20;

    // Validar que el año de expiración esté dentro del rango permitido
    if (year < currentYear || year > upperLimitYear) {
      return { cardExpired: true };
    }

    return null;
  }
}
