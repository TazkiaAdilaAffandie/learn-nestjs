import { Test, TestingModule } from '@nestjs/testing';
import { DiscountController } from './discount.controller.js';
import { DiscountService } from './discount.service.js';

describe('DiscountController', () => {
  let controller: DiscountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscountController],
      providers: [DiscountService],
    }).compile();

    controller = module.get<DiscountController>(DiscountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
