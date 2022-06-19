import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {CompanySchema,Company} from './schemas/companies.schema';
import { TeamsModule } from 'src/teams/teams.module';
@Module({
  imports: [TeamsModule,
    MongooseModule.forFeature([
        {name: Company.name, schema: CompanySchema},
    ])
],
  controllers: [CompaniesController],
  providers: [CompaniesService]
})
export class CompaniesModule {}
