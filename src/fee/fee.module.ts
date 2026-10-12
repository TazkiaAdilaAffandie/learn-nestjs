import { Module } from '@nestjs/common';
import { FeeService } from './fee.service.js';
import { FeeController } from './fee.controller.js';

@Module({
  controllers: [FeeController],
  providers: [FeeService],
})
export class FeeModule {}
