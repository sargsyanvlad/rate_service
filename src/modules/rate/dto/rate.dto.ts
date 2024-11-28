import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RateDto {
  @ApiProperty({ type: 'number' })
  @IsNumber()
  bid: number;

  @ApiProperty({ type: 'number' })
  @IsNumber()
  ask: number;

  @ApiProperty({ type: 'number' })
  @IsNumber()
  mid: number;
}
