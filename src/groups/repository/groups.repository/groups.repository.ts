import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class GroupsRepository {
  constructor(private prismaService: PrismaService) {}

  findMany(latitude: number, longitude: number) {
    return this.prismaService.$queryRawUnsafe(
      `SELECT id, name, latitude, longitude, descripition
    FROM "Group"
    WHERE (
        6371 * acos(
            cos(radians($1)) *
            cos(radians(latitude)) *
            cos(radians(longitude) - radians($2)) +
            sin(radians($1)) *
            sin(radians(latitude))
        )
    ) <= 1;`,
      latitude,
      longitude,
    );
  }
}
