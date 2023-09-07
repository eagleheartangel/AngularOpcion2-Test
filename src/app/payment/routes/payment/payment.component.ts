import { Component, HostListener } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { ValidationService } from '../../services/validationservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  confirmScreen!: boolean;
  faCcVisa = faCcVisa;

  @HostListener('input', ['$event']) onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let inputValue = input.value;
    if (input.id === 'expirationInput') {
      // Remove all non-numeric characters
      inputValue = inputValue.replace(/\D/g, '');

      // Insert a space after the first two characters (month)
      if (inputValue.length > 2) {
        inputValue =
          inputValue.substring(0, 2) + '    /    ' + inputValue.substring(2);
      }

      // Set the formatted value back to the input
      input.value = inputValue;
    }
  }

  // Form
  paymentForm: UntypedFormGroup = this.formBuilder.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validationService.letters),
        Validators.minLength(5),
        Validators.maxLength(50),
      ],
    ],
    number: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validationService.numbers),
        Validators.minLength(10),
        Validators.maxLength(16),
      ],
    ],
    expiration: [
      '',
      [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(13),
        this.validationService.validateDate,
      ],
    ],
    cvv: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(3)],
    ],
  });

  constructor(
    private formBuilder: UntypedFormBuilder,
    private validationService: ValidationService
  ) {}

  // Error validation inputs
  envErrormsg(value: string): string {
    const errors = this.paymentForm.get(value)?.errors;
    if (errors?.['required']) {
      return `${value} required`;
    } else if (errors?.['invalidMonth']) {
      return `invalid month format`;
    } else if (errors?.['cardExpired']) {
      return `card expired`;
    } else if (errors?.['pattern']) {
      return 'invalid format';
    } else if (errors?.['minlength']) {
      return `must be at least ${errors?.['minlength']?.requiredLength} characters`;
    } else if (errors?.['maxlength']) {
      return `must be maxium 4 characters`;
    }

    return '';
  }

  isvalid(field: string) {
    return (
      this.paymentForm.controls[field].invalid &&
      this.paymentForm.controls[field].touched
    );
  }

  // Make payment
  pay() {
    if (this.paymentForm.invalid) {
      this.paymentForm.markAllAsTouched();
      return;
    }
    this.confirmScreen = true;
  }

  // Cancel button
  cancel() {
    this.paymentForm.reset();
    this.paymentForm.get('cvv')?.value == '';
  }

  // Confirm Screen
  confirmationScreen() {
    this.confirmScreen = false;
  }
}
