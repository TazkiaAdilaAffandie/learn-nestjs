import { Module } from '@nestjs/common';
import { BillService } from './bill.service.js';
import { BillController } from './bill.controller.js';

@Module({
  controllers: [BillController],
  providers: [BillService],
})
export class BillModule {}
