import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './schemas/user.schema';

@Module({
  controllers: [LoginController],
  providers: [],
 imports: [
    MongooseModule.forFeature([
        {
            name: "User", schema: UsersSchema
        }
    ])
]
})
export class LoginModule {}
