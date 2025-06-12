import { Request, Response } from "express";
import { UserService } from "../services/userService";
import { sign } from "jsonwebtoken";
import { hash, compare } from "bcrypt";

const userService = new UserService();

export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    if (!userData) {
      return res.status(400).json({ error: "User data is required" });
    }

    userData.password = await hash(userData.password, 10);
    userData.createdAt = new Date();
    userData.updatedAt = new Date();
    userData.isActive = true;

    const user = await userService.createUser(userData);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while creating the user",
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    if (!userData) {
      return res.status(400).json({ error: "User data is required" });
    }

    userData.createdAt = new Date();
    userData.updatedAt = new Date();
    userData.isActive = true;

    const user = await userService.getUserByEmail(userData.email);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    compare(userData.password, user.password).then(async (result) => {
      if (!result) {
        return res.status(401).json({ error: "Invalid password" });
      }
      res
        .status(200)
        .json({
          token: sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET as string
          ),
          data: user,
        });
    });
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while creating the user",
    });
  }
};
