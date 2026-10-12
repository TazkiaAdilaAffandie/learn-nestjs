import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, BadRequestException } from '@nestjs/common';
import { ElectricityService } from './electricity.service.js';
import { CreateElectricityDto } from './dto/create-electricity.dto.js';
import { UpdateElectricityDto } from './dto/update-electricity.dto.js';
import { ElectricityBillDto } from './dto/electricity_bills.dto.js';

@Controller('bills')
export class ElectricityController {
  constructor(private readonly electricityService: ElectricityService) {}

  @Post('electricity')
  @HttpCode(200)
  calculate(@Body() body: ElectricityBillDto) {
    // current reading must be bigger than the previous one
    if (body.meter.currentKwh <= body.meter.previousKwh) {
      throw new BadRequestException('currentKwh must be greater than previousKwh');
    }

    return this.electricityService.calculate(body);
  }
}