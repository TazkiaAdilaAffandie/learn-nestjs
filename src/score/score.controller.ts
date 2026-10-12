import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScoreService } from './score.service.js';
import { CreateScoreDto } from './dto/create-score.dto.js';
import { UpdateScoreDto } from './dto/update-score.dto.js';
import { AverageScoreDto } from './dto/average_score.dto.js';

@Controller('score')
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

@Post('average')
  getAverage(@Body() body: AverageScoreDto) {
    const { scores, passMark } = body;
    const count = scores.length;
    const total = scores.reduce((sum, s) => sum + s, 0);
    const average = Math.round((total / count) * 10) / 10;
    const highest = Math.max(...scores);
    const lowest = Math.min(...scores);
    const passed = scores.filter((s) => s >= passMark).length;
    const failed = count - passed;

    return {
      success: true,
      message: 'Score summary calculated',
      data: { count, average, highest, lowest, passMark, passed, failed },
    };

  }
}