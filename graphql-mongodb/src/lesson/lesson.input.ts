import { InputType, Field, ID } from '@nestjs/graphql';
import { MinLength, MaxLength, IsDateString, IsUUID } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @MinLength(2)
  @MaxLength(20)
  @Field()
  name: string;

  @Field()
  @IsDateString()
  startDate: string;

  @Field()
  @IsDateString()
  endDate: string;

  @IsUUID('all', { each: true })
  @Field(() => [ID], { defaultValue: [] })
  students: string[];
}
