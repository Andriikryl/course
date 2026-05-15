import { Injectable } from '@nestjs/common';
// import { PrismaService } from 'prisma/prisma.service';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.course.findMany();
  }

  findOne(id: number) {
    return this.prisma.course.findUnique({
      where: { id },
    });
  }

  create(dto: CreateCourseDto) {
    return this.prisma.course.create({
      data: dto,
    });
  }
}