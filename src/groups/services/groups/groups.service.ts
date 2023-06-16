import { Injectable } from '@nestjs/common';
import { GroupsRepository } from 'src/groups/repository/groups.repository/groups.repository';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class GroupsService {
  constructor(private groupsRepository: GroupsRepository) {}

  async findMany(latitude: number, longitude: number) {
    const groups = await this.groupsRepository.findMany(latitude, longitude);

    return groups;
  }
}
