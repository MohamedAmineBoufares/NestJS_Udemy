import { Report } from '../reports/report.entity';
export declare class User {
    id: number;
    email: string;
    admin: boolean;
    password: string;
    reports: Report[];
    logInsert(): void;
    logUpdate(): void;
    logRemove(): void;
}
