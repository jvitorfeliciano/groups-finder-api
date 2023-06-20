import { Injectable } from '@nestjs/common';
import { GroupDto } from 'src/groups/dtos/group.dto';
import { PrismaService } from 'src/prisma/services/prisma.service';

@Injectable()
export class GroupsRepository {
  constructor(private prismaService: PrismaService) {}

  create(data: GroupDto) {
    return this.prismaService.group.create({
      data,
    });
  }

  findMany(latitude: number, longitude: number) {
    return this.prismaService.$queryRawUnsafe(
      `SELECT id, name, latitude, longitude, description, link
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

  findById(id: number) {
    return this.prismaService.group.findUnique({
      where: {
        id,
      },
    });
  }
}
