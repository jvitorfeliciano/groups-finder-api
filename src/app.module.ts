import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { GroupsModule } from './groups/groups.module';

@Module({
  imports: [PrismaModule, GroupsModule],
})
export class AppModule {}
