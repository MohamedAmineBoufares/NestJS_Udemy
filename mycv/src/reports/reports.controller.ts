import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CurrentUser } from '../users/decoraters/current-user.decorator';
import { User } from '../users/user.entity';
import { AuthGard } from '../gards/auth.gaurd';
import { CreateRepportDto } from './dtos/create-repport.dto';
import { ReportsService } from './reports.service';
import { Serialize } from '../interceptors/serialize.interceptor';
import { ReportDto } from './dtos/report.dto';
import { ApproveRepportDto } from './dtos/approve-repport.dto';
import { AdminGuard } from '../gards/admin.guard';

@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Post()
  @UseGuards(AuthGard)
  @Serialize(ReportDto)
  createRepport(@Body() body: CreateRepportDto, @CurrentUser() user: User) {
    return this.reportsService.create(body, user);
  }

  @Patch('/:id')
  @UseGuards(AdminGuard)
  approveRepport(@Param('id') id: string, @Body() body: ApproveRepportDto) {
    return this.reportsService.changeApproval(id, body.approved);
  }
}
