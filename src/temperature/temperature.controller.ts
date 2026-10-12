import { Controller, Get, Post, Body, Patch, Param, Delete, Query, BadRequestException } from '@nestjs/common';
import { TemperatureService } from './temperature.service.js';
import { CreateTemperatureDto } from './dto/create-temperature.dto.js';
import { UpdateTemperatureDto } from './dto/update-temperature.dto.js';
import { ConvertTemperatureDto } from './dto/convert_temperature.dto.js';
import { ConvertTemperatureQueryDto } from './dto/convert_temperature_query.dto.js';

@Controller('convert/temperature')
export class TemperatureController {
  constructor(private readonly temperatureService: TemperatureService) {}

  @Get(':value')
  convert(
    @Param() params: ConvertTemperatureDto,
    @Query() query: ConvertTemperatureQueryDto,
  ) {
    if (query.from === query.to) {
      throw new BadRequestException('from and to must be different units');
    }
    return this.temperatureService.convert(params.value, query.from, query.to);
  }
}
