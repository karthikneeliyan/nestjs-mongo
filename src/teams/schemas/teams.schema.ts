import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type TeamDocument = Team & Document;

@Schema()
export class Team {

  @Prop()
  teamLeadName: string;

  @Prop()
  companyId: string;

  // need to implement type as UUID
  @Prop()
  _id: string;
}

export const TeamSchema = SchemaFactory.createForClass(Team);