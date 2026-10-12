import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Query } from '@nestjs/common';
import { LoanService } from './loan.service.js';
import { CreateLoanDto } from './dto/create-loan.dto.js';
import { UpdateLoanDto } from './dto/update-loan.dto.js';
import { LoanParamsDto } from './dto/loans_param.dto.js';
import { LoanQueryDto } from './dto/loans_query.dto.js';
import { LoanBodyDto } from './dto/loans_body.dto.js';

@Controller('loans')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post(':principal/installment')
  @HttpCode(200)
  installment(@Param() params: LoanParamsDto,@Query() query: LoanQueryDto,@Body() body: LoanBodyDto,) 
  {
    return this.loanService.installment(
      params.principal,
      query.currency,
      body.months,
      body.annualInterestRate,
    );
  }
}
