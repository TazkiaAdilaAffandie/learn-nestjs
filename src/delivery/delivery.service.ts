import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto.js';
import { UpdateDeliveryDto } from './dto/update-delivery.dto.js';
import { DeliveryBodyDto } from './dto/deliverycost_params.dto.js';

@Injectable()
export class DeliveryService {
  calculate(city: string, express = false, insurance = false, body: DeliveryBodyDto) {
    // base price for each city
    const fares: Record<string, number> = {
      jakarta: 9000,
      bandung: 12000,
      surabaya: 15000,
      medan: 18000,
      denpasar: 20000,
    };

    // city not on the list -> 404
    if (!Object.keys(fares).includes(city)) {
      throw new NotFoundException('City not supported');
    }
    const baseFare = fares[city];

    const { weightKg, dimension } = body;

    const volumetricKg = (dimension.lengthCm * dimension.widthCm * dimension.heightCm) / 5000;

    const chargeableKg = Math.max(weightKg, volumetricKg);

    // 2000 for every started kg above 1 kg
    let weightFee = 0;
    if (chargeableKg > 1) {
      weightFee = Math.ceil(chargeableKg - 1) * 2000;
    }

    // express adds 50% of (base + weight fee)
    let expressFee = 0;
    if (express) {
      expressFee = (baseFare + weightFee) * 0.5;
    }

    // insurance adds 1000 per chargeable kg
    let insuranceFee = 0;
    if (insurance) {
      insuranceFee = chargeableKg * 1000;
    }

    const total = baseFare + weightFee + expressFee + insuranceFee;

    return {
      success: true,
      message: 'Shipping cost calculated',
      data: {
        city,
        express,
        insurance,
        weightKg,
        volumetricKg: Math.round(volumetricKg * 100) / 100,
        chargeableKg: Math.round(chargeableKg * 100) / 100,
        baseFare,
        weightFee,
        expressFee,
        insuranceFee,
        total: Math.round(total),
      },
    };
  }
}