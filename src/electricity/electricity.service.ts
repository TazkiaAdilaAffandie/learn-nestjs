import { Injectable } from '@nestjs/common';
import { CreateElectricityDto } from './dto/create-electricity.dto.js';
import { UpdateElectricityDto } from './dto/update-electricity.dto.js';
import { ElectricityBillDto } from './dto/electricity_bills.dto.js';

@Injectable()
export class ElectricityService {
  calculate(body: ElectricityBillDto) {
    const { customerName, meter, rates } = body;

    // if taxRate is not sent, use 11
    const taxRate = rates.taxRate ?? 11;

    const usageKwh = meter.currentKwh - meter.previousKwh;
    const usageFee = usageKwh * rates.perKwh;
    const subtotal = rates.baseFee + usageFee;
    const tax = (subtotal * taxRate) / 100;
    const total = subtotal + tax;

    return {
      success: true,
      message: 'Electricity bill calculated',
      data: {
        customerName,
        usageKwh,
        baseFee: rates.baseFee,
        usageFee,
        subtotal,
        taxRate,
        tax,
        total,
      },
    };
  }
}