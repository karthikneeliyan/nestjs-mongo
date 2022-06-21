import {Body, Controller, Post, UnauthorizedException} from '@nestjs/common';
import { Model } from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from 'src/define/utils';



@Controller("login")
export class LoginController {

    constructor(
        @InjectModel("User") private userModel: Model<any>) {

    }

    @Post()
    async login(@Body("email") email:string,
        @Body("password") querypassword:string) {

        const user = await this.userModel.findOne({email});

        if(!user) {
            console.log("User does exist on the database.");
            throw new UnauthorizedException();
        }
        if(querypassword!==user.password){
          throw new UnauthorizedException()
        }else{
          const authJwtToken =
          jwt.sign({email, roles: user.roles},
              JWT_SECRET);
              return {authJwtToken}
        }

       
    }

}