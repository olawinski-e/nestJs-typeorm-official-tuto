import { Type } from 'class-transformer';
import { IsPositive, IsOptional } from 'class-validator';

export class PaginationQueryDto {
  @Type(() => Number)
  @IsOptional()
  @IsPositive()
  limit: number;

  @Type(() => Number)
  @IsOptional()
  @IsPositive()
  offset: number;
}
