import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service.js';
import { DeliveryController } from './delivery.controller.js';

@Module({
  controllers: [DeliveryController],
  providers: [DeliveryService],
})
export class DeliveryModule {}
