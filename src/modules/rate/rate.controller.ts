import { Controller, Get } from '@nestjs/common';
import { RateService } from './rate.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { RateDto } from './dto/rate.dto';

@ApiTags('RATES')
@Controller('rates')
export class RateController {
  constructor(private readonly priceService: RateService) {}

  @Get('/bitcoin')
  @ApiOkResponse({ type: RateDto })
  getPrice() {
    return this.priceService.getPrice();
  }
}
