import { Schema, model, Document } from "mongoose";
import { User } from "../types/user";

interface UserDocument extends Omit<User, "id">, Document {}
const userSchema = new Schema<UserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: String, default: () => new Date().toISOString() },
    updatedAt: { type: String, default: () => new Date().toISOString() },
    isActive: { type: Boolean, default: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    lastLogin: { type: Date },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret._v;
        return ret;
      },
    },
  }
);

export const UserModel = model<UserDocument>("User", userSchema);
