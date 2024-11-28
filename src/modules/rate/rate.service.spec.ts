import { Test, TestingModule } from '@nestjs/testing';
import { RateService } from './rate.service';
import { RateConfig } from './rate.config';
import { Logger } from '@nestjs/common';
import axios from 'axios';

jest.mock('axios');

describe('RateService', () => {
  let service: RateService;
  let config: RateConfig;

  beforeEach(async () => {
    config = {
      binanceApiUrl:
        'https://api.binance.com/api/v3/ticker/bookTicker?symbol=BTCUSDT',
      updateFrequency: 60000,
      rateCommission: 0.001,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [RateService, { provide: RateConfig, useValue: config }],
    }).compile();

    service = module.get<RateService>(RateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should fetch and update price', async () => {
    const response = {
      data: {
        bidPrice: '50000',
        askPrice: '51000',
      },
    };
    (axios.get as jest.Mock).mockResolvedValue(response);

    await service['updatePrice']();

    expect(service.getPrice()).toEqual({
      bid: 49950,
      ask: 51050.99999999999,
      mid: 50500.5,
    });
  });

  it('should log error if fetching price fails', async () => {
    const loggerErrorSpy = jest.spyOn(Logger.prototype, 'error');
    (axios.get as jest.Mock).mockRejectedValue(new Error('Network Error'));

    await service['updatePrice']();

    expect(loggerErrorSpy).toHaveBeenCalledWith(
      'Error fetching price from Binance:',
      expect.any(Error),
    );
  });
});
