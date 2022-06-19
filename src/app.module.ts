import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {MONGOOSE_CONNECTION_STRING} from "./define/utils"
import { CompaniesController } from './companies/companies.controller';
import { CompaniesModule } from './companies/companies.module';
import { TeamsModule } from './teams/teams.module';
@Module({
  imports: [ MongooseModule.forRoot(MONGOOSE_CONNECTION_STRING),CompaniesModule, TeamsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
