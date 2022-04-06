import { Injectable } from '@nestjs/common';
import { Students } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Students) private studentRepository: Repository<Students>,
  ) {}

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Students> {
    const { firstName, lastName } = createStudentInput;

    const student = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
    });

    return this.studentRepository.save(student);
  }
}
