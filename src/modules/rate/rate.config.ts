import { Config, Env } from '@ukitgroup/nestjs-config';
import { Number, String } from '@ukitgroup/nestjs-config/types';

@Config('RATE')
export class RateConfig {
  @Env('COMMISSION')
  @Number()
  public readonly rateCommission: number = 0.0001;

  @Env('UPDATE_FREQUENCY')
  @Number()
  public readonly updateFrequency: number = 10000;

  @Env('BINANCE_API_URL')
  @String()
  public readonly binanceApiUrl: string = '';
}
