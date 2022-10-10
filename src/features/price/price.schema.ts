import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';
import { DateScalar } from '../../common/scalars/date.scalar';

export type PriceDocument = PriceObj & Document;

// export const PriceSchema = new Schema({
//   title: String,
//   description: String,
//   amount: Number,
// });

@Schema()
export class PriceObj {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  amount: number;

  @Prop()
  creationDate: string;
}

export const PriceSchema = SchemaFactory.createForClass(PriceObj);
