import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lessons } from './lesson.entity';
import { Repository } from 'typeorm';

import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lessons) private lessonRepository: Repository<Lessons>,
  ) {}

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lessons> {
    const { name, startDate, endDate } = createLessonInput;
    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });

    return this.lessonRepository.save(lesson);
  }

  async getLesson(id: string): Promise<Lessons> {
    return this.lessonRepository.findOneBy({ id });
  }

  async getLessons(): Promise<Lessons[]> {
    return this.lessonRepository.find();
  }
}
