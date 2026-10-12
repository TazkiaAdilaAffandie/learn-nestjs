import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TaxService } from './tax.service.js';
import { CreateTaxDto } from './dto/create-tax.dto.js';
import { UpdateTaxDto } from './dto/update-tax.dto.js';
import { SalesTaxDto } from './dto/sales-tax.dto.js';

@Controller('tax')
export class TaxController {
  constructor(private readonly taxService: TaxService) {}

  @Get()
  calculateTax(@Query() query: SalesTaxDto) {
    const { amount, rate, inclusive } = query;

    let tax: number, net: number, gross: number;

    if (inclusive) {
      tax = (amount * rate) / (100 + rate);
      net = amount - tax;
      gross = amount;
    } else {
      tax = (amount * rate) / 100;
      net = amount;
      gross = amount + tax;
    }

    return {
      success: true,
      message: 'Tax calculated',
      data: { amount, rate, inclusive, tax, net, gross },
    };
  }
} 