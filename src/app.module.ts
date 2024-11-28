import { Module } from '@nestjs/common';
import { RateModule } from './modules/rate/rate.module';
import { AppConfigModule } from './config/module';

@Module({
  imports: [AppConfigModule, RateModule],
})
export class AppModule {}
