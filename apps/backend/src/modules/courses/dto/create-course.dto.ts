import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCourseDto {
    @ApiProperty({
    example: 'NestJS Fundamentals',
  })
  @IsString()
  @IsNotEmpty()
  title: string;



  @ApiPropertyOptional({
    example: 'Backend course',
  })
  @IsString()
  @IsOptional()
  description?: string;
}