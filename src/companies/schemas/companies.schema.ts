import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type CompanyDocument = Company & Document;

@Schema()
export class Company {


  @Prop()
  name: string;

  @Prop()
  ceo: string;

  @Prop()
  address: string;

  @Prop()
  inceptionDate: string;

  // need to implement type as UUID
  @Prop()
  _id: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);