import { Controller, Get, Param, Post } from '@nestjs/common';
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
  create() {
    return this.coursesService.create();
  }
}