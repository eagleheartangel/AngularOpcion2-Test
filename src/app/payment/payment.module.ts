import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaymentRoutingModule } from './payment.routing';
import { SharedModule } from '../shared/shared.module';

import { PaymentComponent } from './routes/payment/payment.component';

@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PaymentRoutingModule,
    FontAwesomeModule,
  ],
})
export class PaymentModule {}
