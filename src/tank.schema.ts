import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type TankDocument = Tank & mongoose.Document;

@Schema()
export class Tank {
  @Prop()
  _id: mongoose.Schema.Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  level: number;

  @Prop()
  armor_penetration: number;

  @Prop()
  damage: number;

  @Prop()
  attack_speed: number;

  @Prop()
  time_of_targeting: number;

  @Prop()
  ammunition: number;

  @Prop()
  country: string;

  @Prop()
  tank_image: string;

  @Prop()
  country_flag: string;
};

export const TankSchema = SchemaFactory.createForClass(Tank);