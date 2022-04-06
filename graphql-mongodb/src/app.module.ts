import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { LessonModule } from './lesson/lesson.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lessons } from './lesson/lesson.entity';
import { StudentModule } from './student/student.module';
import { Students } from './student/student.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://Admin:Admin123@cluster0.bceul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Lessons, Students],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    LessonModule,
    StudentModule,
  ],
})
export class AppModule {}
