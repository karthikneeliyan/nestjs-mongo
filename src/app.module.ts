import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {MONGOOSE_CONNECTION_STRING} from "./define/utils"
import { CompaniesController } from './companies/companies.controller';
import { CompaniesModule } from './companies/companies.module';
import { TeamsModule } from './teams/teams.module';
import { LoginModule } from './login/login.module';
import { GetUserMiddleware } from './middleware/get-user.middleware';
import { TeamsController } from './teams/teams.controller';
@Module({
  imports: [ MongooseModule.forRoot(MONGOOSE_CONNECTION_STRING),CompaniesModule, TeamsModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer): void {

      consumer
          .apply(GetUserMiddleware)
          .forRoutes(
              CompaniesController,
              TeamsController
          );

  }

}

