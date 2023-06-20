import { Injectable, NotFoundException } from '@nestjs/common';
import { GroupDto } from 'src/groups/dtos/group.dto';
import { GroupsRepository } from 'src/groups/repository/groups.repository/groups.repository';

@Injectable()
export class GroupsService {
  constructor(private groupsRepository: GroupsRepository) {}

  async findMany(latitude: number, longitude: number) {
    const groups = await this.groupsRepository.findMany(latitude, longitude);

    return groups;
  }

  async create(groupDto: GroupDto) {
    const group = await this.groupsRepository.create(groupDto);

    return group;
  }

  async findById(id: number) {
    const group = await this.groupsRepository.findById(id);

    if (!group) {
      throw new NotFoundException('Group not found');
    }

    return group;
  }
}
