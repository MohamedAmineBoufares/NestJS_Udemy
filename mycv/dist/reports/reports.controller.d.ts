import { User } from '../users/user.entity';
import { CreateRepportDto } from './dtos/create-repport.dto';
import { ReportsService } from './reports.service';
import { ApproveRepportDto } from './dtos/approve-repport.dto';
export declare class ReportsController {
    private reportsService;
    constructor(reportsService: ReportsService);
    createRepport(body: CreateRepportDto, user: User): Promise<import("./report.entity").Report>;
    approveRepport(id: string, body: ApproveRepportDto): Promise<import("./report.entity").Report>;
}
