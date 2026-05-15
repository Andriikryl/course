import { Controller, Get, Param, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Body } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  getAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.coursesService.findOne(Number(id));
  }

  @Post()
  create(@Body() dto: CreateCourseDto) {
    return this.coursesService.create(dto);
  }
}