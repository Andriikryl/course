import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoursesModule } from './modules/courses/courses.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot(), CoursesModule, PrismaModule],
})
export class AppModule {}
