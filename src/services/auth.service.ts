import { prismaClient } from "../utils/database.util";
import { jwtSign, verifyPassword } from "../utils/auth.util";
import { LoginResponse } from "../types/auth.type";

export const authService = {
  login: async (
    email: string,
    password: string,
  ): Promise<LoginResponse> => {
    const user = await prismaClient.users.findFirst({
      where: {
        email,
      }
    });

    if (!user) {
      throw new Error('Invalid email');
    }

    const verifyPass = verifyPassword(user, {
      email,
      password
    });

    if (!verifyPass) {
      throw new Error('Incorrect email or password');
    }

    const token: string = jwtSign(verifyPass);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token
    };
  }
}