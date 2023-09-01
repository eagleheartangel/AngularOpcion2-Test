import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  letters: string = '^[A-Za-zs ]+$';
  numbers: string = '[0-9]{1,}';
}
