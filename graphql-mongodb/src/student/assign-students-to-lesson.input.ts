import { InputType, Field, ID } from '@nestjs/graphql';
import { IsUUID, MinLength } from 'class-validator';
import { StudentType } from './student.type';

@InputType()
export class AssignStudentsToLessonInput {
  @IsUUID()
  @Field((type) => ID)
  lessonId: string;

  @IsUUID('all', { each: true }) // all refers to all of uuid version, each refers to each element of the array
  @Field((type) => [ID])
  studentIds: string[];
}
