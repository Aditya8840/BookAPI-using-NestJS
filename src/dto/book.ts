import { IsNotEmpty, IsString, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class BookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  summary: string;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  publishedDate: Date;
}
