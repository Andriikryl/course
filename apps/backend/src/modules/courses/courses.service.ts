import { Injectable } from '@nestjs/common';
// import { PrismaService } from 'prisma/prisma.service';
import { PrismaService } from '../../../prisma/prisma.service';

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

  create() {
    return this.prisma.course.create({
      data: {
        title: 'New Course',
        description: 'Course description',
      },
    });
  }
}