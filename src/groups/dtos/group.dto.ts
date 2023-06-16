import { IsNumber, IsString } from 'class-validator';

export class GroupDto {
  @IsString()
  name: string;

  @IsString()
  descripition: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;
}
