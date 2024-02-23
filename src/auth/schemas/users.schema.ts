import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// Exclude the password field when converting document to JSON
UserSchema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.password;
    return ret;
  }
});

export interface User extends mongoose.Document {
  email: string;
  password: string;
}
