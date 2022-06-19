import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import {CreateTeamDto} from './dto/create-team.dto';

import { TeamsController } from './teams.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Team,TeamSchema } from './schemas/teams.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
        {name: Team.name, schema: TeamSchema},
    ])
],
  controllers: [TeamsController],
  providers: [TeamsService],
  exports:[TeamsService]
})
export class TeamsModule {}
