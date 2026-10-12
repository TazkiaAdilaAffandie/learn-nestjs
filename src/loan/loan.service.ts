import { Injectable } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto.js';
import { UpdateLoanDto } from './dto/update-loan.dto.js';

@Injectable()
export class LoanService {
  installment(principal: number, currency = 'IDR', months: number, annualInterestRate: number) {
    // monthly rate = yearly rate / 12 months / 100 (to turn % into a decimal)
    const monthlyRate = annualInterestRate / 12 / 100;

    let monthlyInstallment: number;

    if (monthlyRate === 0) {
      // no interest, just split the principal evenly
      monthlyInstallment = principal / months;
    } else {
      // annuity formula
      const factor = Math.pow(1 + monthlyRate, months);
      monthlyInstallment = (principal * monthlyRate * factor) / (factor - 1);
    }

    // money is rounded to a whole number
    monthlyInstallment = Math.round(monthlyInstallment);
    const totalPayment = monthlyInstallment * months;
    const totalInterest = totalPayment - principal;

    return {
      success: true,
      message: 'Installment calculated',
      data: {
        principal,
        currency,
        months,
        annualInterestRate,
        monthlyInterestRate: monthlyRate,
        monthlyInstallment,
        totalPayment,
        totalInterest,
      },
    };
  }
}