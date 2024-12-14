export interface Investment {
  initialInvestment: number;
  anualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export interface YearData {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}
