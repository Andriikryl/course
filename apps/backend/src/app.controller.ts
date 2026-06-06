import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCourseDto } from './modules/courses/dto/create-course.dto';
import { CoursesService } from './modules/courses/courses.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Courses')
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @ApiOperation({ summary: 'Get all courses' })
  @Get()
  getAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.coursesService.findOne(Number(id));
  }

  @ApiOperation({ summary: 'Create course' })
  @Post()
  create(@Body() dto: CreateCourseDto) {
    return this.coursesService.create(dto);
  }
}