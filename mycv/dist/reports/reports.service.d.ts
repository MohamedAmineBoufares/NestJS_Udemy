import { User } from '../users/user.entity';
import { Repository } from 'typeorm';
import { CreateRepportDto } from './dtos/create-repport.dto';
import { Report } from './report.entity';
import { GetEstimatetDto } from './dtos/get-estimate.dto';
export declare class ReportsService {
    private repo;
    constructor(repo: Repository<Report>);
    createEstimate({ make, model, lng, lat, year, mileage }: GetEstimatetDto): Promise<any[]>;
    create(reportDto: CreateRepportDto, user: User): Promise<Report>;
    changeApproval(id: string, approved: boolean): Promise<Report>;
}
