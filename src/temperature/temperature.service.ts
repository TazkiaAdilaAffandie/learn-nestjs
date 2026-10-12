import { Injectable } from '@nestjs/common';
import { CreateTemperatureDto } from './dto/create-temperature.dto.js';
import { UpdateTemperatureDto } from './dto/update-temperature.dto.js';

@Injectable()
export class TemperatureService {
  convert(value: number, from: string, to: string) {
    // convert whatever comes in to Celsius first, as a common base
    const celsius = this.toCelsius(value, from);
    const result = this.fromCelsius(celsius, to);

    return {
      success: true,
      message: 'Temperature converted',
      data: {
        value,
        from,
        to,
        result: Math.round(result * 100) / 100,
      },
    };
  }

  private toCelsius(value: number, unit: string): number {
    if (unit === 'C') return value;
    if (unit === 'F') return ((value - 32) * 5) / 9;
    return value - 273.15; // K
  }

  private fromCelsius(celsius: number, unit: string): number {
    if (unit === 'C') return celsius;
    if (unit === 'F') return celsius * (9 / 5) + 32;
    return celsius + 273.15; // K
  }
}