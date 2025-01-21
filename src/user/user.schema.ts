
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({timestamps: true} )
export class User {
  @Prop({
    type : String, 
    required :true,
    min : [3, 'Name is too short'],
    max : [20, 'Name is too long']
  })
  name: string;
//   @Prop({
//     required :true,
//     unique : true
//   })
//   email :string

//   @Prop({
//     type : String,
//     required : true,
//     min : [6, 'Password is too short'],
//     max : [200, 'Password is too long']
//   })
//   password :string

//   @Prop({
//     type : String,
//     required : true,
//     enum : ['user', 'admin'],
//     default : 'user'
//   })
//   role :string
//   @Prop({
//     type :String,
//     enum : ['male', 'female'],
//   })
//   gender :string
//   @Prop({
//     type :Number,
//     required : true,
    
//   })
//   age :number

//   @Prop({
//     type :String ,
//     required : true,

//   })
//   phoneNumber :string

}

export const UserSchema = SchemaFactory.createForClass(User);
