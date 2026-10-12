import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Query } from '@nestjs/common';
import { DiscountService } from './discount.service.js';
import { CreateDiscountDto } from './dto/create-discount.dto.js';
import { UpdateDiscountDto } from './dto/update-discount.dto.js';
import { CheckoutQueryDto } from './dto/checkout_discount_query.dto.js';
import { CheckoutBodyDto } from './dto/checkout_discount.dto.js';

@Controller('checkout')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @Post('discount')
  @HttpCode(200)
  checkout(@Query() query: CheckoutQueryDto, @Body() body: CheckoutBodyDto) {
    return this.discountService.checkout(body.items, query.member, query.coupon);
  }
}