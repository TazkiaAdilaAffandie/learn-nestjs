import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { FeeService } from './fee.service.js';
import { CreateFeeDto } from './dto/create-fee.dto.js';
import { UpdateFeeDto } from './dto/update-fee.dto.js';
import { ParkingParamsDto } from './dto/parkingfee_params.dto.js';
import { ParkingQueryDto } from './dto/parkingfee_query.dto.js';

@Controller('parking')
export class FeeController {
  constructor(private readonly feeService: FeeService) {}

  @Get(':hours')
  calculate(@Param() params: ParkingParamsDto, @Query() query: ParkingQueryDto) {
    return this.feeService.calculate(params.hours, query.vehicle, query.weekend);
  }
}