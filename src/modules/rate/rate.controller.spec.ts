import { Test, TestingModule } from '@nestjs/testing';
import { RateController } from './rate.controller';
import { RateService } from './rate.service';

describe('RateController', () => {
  let controller: RateController;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let service: RateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RateController],
      providers: [
        {
          provide: RateService,
          useValue: {
            getPrice: jest.fn().mockReturnValue({
              bid: 49950,
              ask: 51051,
              mid: 50500.5,
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<RateController>(RateController);
    service = module.get<RateService>(RateService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return price', () => {
    expect(controller.getPrice()).toEqual({
      bid: 49950,
      ask: 51051,
      mid: 50500.5,
    });
  });
});
