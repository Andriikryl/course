import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCourseDto } from './modules/courses/dto/create-course.dto';
import { CoursesService } from './modules/courses/courses.service';


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