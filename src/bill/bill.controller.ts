import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BillService } from './bill.service.js';
import { CreateBillDto } from './dto/create-bill.dto.js';
import { UpdateBillDto } from './dto/update-bill.dto.js';
import { PeopleCountDto } from './dto/peoplecount.dto.js';
import { SplitBillDto } from './dto/split_bill.dto.js';

@Controller('bill')
export class BillController {
  constructor(private readonly billService: BillService) {}

    @Post(':peopleCount/split')
  splitBill(@Param() params: PeopleCountDto, @Body() body: SplitBillDto) {
    const { peopleCount } = params;
    const { items, tipPercent } = body;

    let subtotal = 0;
    for (const item of items) {
      subtotal += item.price * item.qty;
    }

    const tip = (subtotal * tipPercent) / 100;
    const total = subtotal + tip;
    const perPerson = Math.round(total / peopleCount);

    return {
      success: true,
      message: 'Bill split',
      data: { peopleCount, subtotal, tipPercent, tip, total, perPerson },
    };
  }
}