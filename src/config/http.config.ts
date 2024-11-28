import { Config, Env } from '@ukitgroup/nestjs-config';
import { Number } from '@ukitgroup/nestjs-config/types';
import { IsOptional } from '@ukitgroup/nestjs-config/validator';

@Config('HTTP')
export class HttpConfig {
  @Env('PORT')
  @Number()
  public readonly port: number = 3000;

  @Env('CORS_ORIGIN_REGEX')
  @IsOptional()
  private readonly corsOriginCustomRegex: string;
}
