import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { GroupDto } from 'src/groups/dtos/group.dto';
import { GroupsService } from 'src/groups/services/groups/groups.service';

@Controller('groups')
export class GroupsController {
  constructor(private groupsService: GroupsService) {}

  @Post()
  async create(@Body() groupDto: GroupDto) {
    const group = await this.groupsService.create(groupDto);

    return group;
  }

  @Get(':latitude/:longitude')
  async findAll(@Param() params: Record<string, string>) {
    const groups = await this.groupsService.findMany(
      Number(params.latitude),
      Number(params.longitude),
    );

    return groups;
  }
}
