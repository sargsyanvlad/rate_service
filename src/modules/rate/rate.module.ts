import { Module } from '@nestjs/common';
import { RateController } from './rate.controller';
import { RateService } from './rate.service';
import { RateConfig } from './rate.config';
import { ConfigModule } from '@ukitgroup/nestjs-config';

@Module({
  imports: [ConfigModule.forFeature([RateConfig])],
  controllers: [RateController],
  providers: [RateService],
})
export class RateModule {}
