import { InputType, Field } from '@nestjs/graphql';
import { MinLength, MaxLength, IsDateString } from 'class-validator';

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
}
