import { Controller, Get, Param } from '@nestjs/common';
import { GroupsService } from 'src/groups/services/groups/groups.service';

@Controller('groups')
export class GroupsController {
  constructor(private groupsService: GroupsService) {}

  @Get(':latitude/:longitude')
  async findAll(@Param() params: Record<string, string>) {
    const groups = await this.groupsService.findMany(
      Number(params.latitude),
      Number(params.longitude),
    );

    return groups;
  }
}
