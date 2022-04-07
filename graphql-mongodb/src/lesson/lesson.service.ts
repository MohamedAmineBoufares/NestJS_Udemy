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
    const { name, startDate, endDate, students } = createLessonInput;
    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
      students,
    });

    return this.lessonRepository.save(lesson);
  }

  async getLesson(id: string): Promise<Lessons> {
    return this.lessonRepository.findOne({ id });
  }

  async getLessons(): Promise<Lessons[]> {
    return this.lessonRepository.find();
  }

  async assignStudentToLesson(
    lessonId: string,
    studentIds: string[],
  ): Promise<Lessons> {
    const lesson = await this.lessonRepository.findOne({ id: lessonId });
    lesson.students = [...lesson.students, ...studentIds];

    return this.lessonRepository.save(lesson);
  }
}
