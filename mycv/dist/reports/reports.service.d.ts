import { User } from '../users/user.entity';
import { Repository } from 'typeorm';
import { CreateRepportDto } from './dtos/create-repport.dto';
import { Report } from './report.entity';
export declare class ReportsService {
    private repo;
    constructor(repo: Repository<Report>);
    create(reportDto: CreateRepportDto, user: User): Promise<Report>;
    changeApproval(id: string, approved: boolean): Promise<Report>;
}
