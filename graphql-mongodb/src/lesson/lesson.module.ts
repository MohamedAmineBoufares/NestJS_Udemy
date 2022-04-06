import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lessons } from './lesson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lessons])],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}
