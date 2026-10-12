import { Module } from '@nestjs/common';
import { DiscountService } from './discount.service.js';
import { DiscountController } from './discount.controller.js';

@Module({
  controllers: [DiscountController],
  providers: [DiscountService],
})
export class DiscountModule {}
