import { UserModel } from "../models/user";
import { User } from "../types/user";

export class UserService {

    async createUser(userData: User): Promise<User> {
        const user = new UserModel(userData);
        return await user.save().then(savedUser => {
            return savedUser.toObject() as User;
        });
    }

    async getUserByEmail(email: string): Promise<User> {
        return await UserModel.findOne({ email }).then(user => {
            if (!user) {
                throw new Error("User not found");
            }
            return user.toObject() as User;
        });
    }

}
