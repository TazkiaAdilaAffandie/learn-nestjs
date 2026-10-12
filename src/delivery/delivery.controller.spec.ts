import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryController } from './delivery.controller.js';
import { DeliveryService } from './delivery.service.js';

describe('DeliveryController', () => {
  let controller: DeliveryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliveryController],
      providers: [DeliveryService],
    }).compile();

    controller = module.get<DeliveryController>(DeliveryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
