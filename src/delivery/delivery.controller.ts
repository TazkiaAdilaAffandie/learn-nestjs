import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Query } from '@nestjs/common';
import { DeliveryService } from './delivery.service.js';
import { CreateDeliveryDto } from './dto/create-delivery.dto.js';
import { UpdateDeliveryDto } from './dto/update-delivery.dto.js';
import { DeliveryBodyDto, DeliveryParamsDto, DeliveryQueryDto } from './dto/deliverycost_params.dto.js';

@Controller('shipping')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Post(':city')
  @HttpCode(200)
  calculate(
    @Param() params: DeliveryParamsDto,
    @Query() query: DeliveryQueryDto,
    @Body() body: DeliveryBodyDto,
  ) {
    return this.deliveryService.calculate(params.city, query.express, query.insurance, body);
  }
}
