import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
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
import { GetEstimatetDto } from './dtos/get-estimate.dto';

@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Get()
  getEstimate(@Query() query: GetEstimatetDto) {
    return this.reportsService.createEstimate(query);
  }

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
