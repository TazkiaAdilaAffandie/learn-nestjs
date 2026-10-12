import { Injectable } from '@nestjs/common';
import { CreateFeeDto } from './dto/create-fee.dto.js';
import { UpdateFeeDto } from './dto/update-fee.dto.js';


@Injectable()
export class FeeService {
  calculate(hours: number, vehicle: string, weekend = false) {
    // price per hour for each vehicle
    const rates: Record<string, number> = {
      motorcycle: 2000,
      car: 8000,
      bus: 15000,
    };
    const hourlyRate = rates[vehicle];

    const billedHours = Math.ceil(hours);

    // weekend adds 20%
    const weekendSurcharge = weekend ? 0.2 : 0;

    const total = billedHours * hourlyRate * (1 + weekendSurcharge);

    return {
      success: true,
      message: 'Parking fee calculated',
      data: {
        hours,
        billedHours,
        vehicle,
        weekend,
        hourlyRate,
        weekendSurcharge,
        total: Math.round(total),
      },
    };
  }
}