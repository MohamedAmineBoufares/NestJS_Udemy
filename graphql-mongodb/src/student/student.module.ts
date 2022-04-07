import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Students } from './student.entity';
import { StudentResolver } from './student.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Students])],
  providers: [StudentResolver, StudentService],
  exports: [StudentService],
})
export class StudentModule {}
