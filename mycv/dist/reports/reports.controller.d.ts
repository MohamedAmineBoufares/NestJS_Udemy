import { User } from '../users/user.entity';
import { CreateRepportDto } from './dtos/create-repport.dto';
import { ReportsService } from './reports.service';
import { ApproveRepportDto } from './dtos/approve-repport.dto';
import { GetEstimatetDto } from './dtos/get-estimate.dto';
export declare class ReportsController {
    private reportsService;
    constructor(reportsService: ReportsService);
    getEstimate(query: GetEstimatetDto): Promise<any[]>;
    createRepport(body: CreateRepportDto, user: User): Promise<import("./report.entity").Report>;
    approveRepport(id: string, body: ApproveRepportDto): Promise<import("./report.entity").Report>;
}
