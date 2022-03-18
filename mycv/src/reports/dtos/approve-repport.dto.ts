import { IsBoolean } from 'class-validator';

export class ApproveRepportDto {
  @IsBoolean()
  approved: boolean;
}
