import { Inject, Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { RateConfig } from './rate.config';

@Injectable()
export class RateService {
  private bid: number = 0;
  private ask: number = 0;
  private mid: number = 0;
  private readonly logger = new Logger(RateService.name);

  constructor(@Inject(RateConfig) private readonly config: RateConfig) {
    this.updatePrice();
    setInterval(this.updatePrice.bind(this), this.config.updateFrequency);
  }

  private async updatePrice() {
    try {
      this.logger.log('Fetching price from Binance...');
      const response = await axios.get(this.config.binanceApiUrl);
      const { bidPrice, askPrice } = response.data;
      this.bid = parseFloat(bidPrice) * (1 - this.config.rateCommission);
      this.ask = parseFloat(askPrice) * (1 + this.config.rateCommission);
      this.mid = (this.bid + this.ask) / 2;
    } catch (error) {
      this.logger.error('Error fetching price from Binance:', error);
    }
  }

  public getPrice() {
    return {
      bid: this.bid,
      ask: this.ask,
      mid: this.mid,
    };
  }
}
