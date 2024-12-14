import { Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import type { Investment } from './investment.model';
import { InvestmentResultsService } from './investment-results/investment-results.service';
import type { YearData } from './investment.model';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  resultsData?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];

  private investmentResultsService = inject(InvestmentResultsService);

  onCalculate(investment: Investment) {
    this.resultsData = this.investmentResultsService.calculateInvestmentResults(
      investment.initialInvestment,
      investment.duration,
      investment.expectedReturn,
      investment.anualInvestment
    );
  }
}
