import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { Investment } from '../investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<Investment>();
  initialInvestment = '0';
  anualInvestment = '0';
  expectedReturn = '5';
  duration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.initialInvestment,
      anualInvestment: +this.anualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration
    })
  }
}