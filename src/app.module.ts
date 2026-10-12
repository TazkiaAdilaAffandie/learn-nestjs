import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TaxModule } from './tax/tax.module.js';
import { ScoreModule } from './score/score.module.js';
import { BillModule } from './bill/bill.module.js';
import { TemperatureModule } from './temperature/temperature.module.js';
import { DiscountModule } from './discount/discount.module.js';
import { LoanModule } from './loan/loan.module.js';
import { FeeModule } from './fee/fee.module.js';
import { ElectricityModule } from './electricity/electricity.module.js';
import { DeliveryModule } from './delivery/delivery.module.js';

@Module({
  imports: [TaxModule, ScoreModule, BillModule, TemperatureModule, DiscountModule, LoanModule, FeeModule, ElectricityModule, DeliveryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
