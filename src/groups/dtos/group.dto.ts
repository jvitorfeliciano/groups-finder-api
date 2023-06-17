import { IsNumber, IsString } from 'class-validator';

export class GroupDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  link: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;
}
