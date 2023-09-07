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

    // Eliminar espacios en blanco y barras diagonales si están presentes
    inputValue = inputValue.replace(/\s+/g, '').replace('/', '');

    if (!inputValue) return null;

    // Validar que la longitud de la entrada sea de exactamente 4 caracteres (MMYY)
    if (inputValue.length !== 4) {
      return { invalidFormat: true };
    }

    // Validar el mes a 12 meses
    const month = parseInt(inputValue.substring(0, 2), 10);
    if (month < 1 || month > 12) {
      return { invalidMonth: true };
    }

    // Validar el mes independiente (adicional)
    const date = new Date();

    // Obtener el año actual en formato de dos dígitos (YY)
    const currentYear = date.getFullYear() % 100;
    const currentMonth = date.getMonth();

    // Obtener el año de expiración en formato de dos dígitos (YY)
    const year = parseInt(inputValue.substring(2, 4), 10);

    // Calcular el año límite superior para la tarjeta (20 años en el futuro)
    const upperLimitYear = currentYear + 20;
    console.log(`mes: ${month}, mesActual: ${currentMonth}`);

    // Validar que el año de expiración esté dentro del rango permitido
    if (year < currentYear || year > upperLimitYear || month <= currentMonth) {
      return { cardExpired: true };
    }

    return null;
  }
}
