import { Request, Response } from 'express';
import { StatusCodes as SC } from 'http-status-codes';
import { authService } from "../services/auth.service";
import { errorValue, validateParams } from "../utils/validate.util";
import defaultResponse from "../utils/response.util";

export const login = async (req: Request, res: Response) => {
  validateParams(req.body, ['email', 'password'])
  const { email, password } = req.body as {
    email: string;
    password: string;
  };

  const login = await authService.login(email, password);

  errorValue(!login, {
    statusCode: SC.UNAUTHORIZED,
    message: 'User with that email or phone does not exist',
  })

  return res.status(SC.OK).json(defaultResponse.renderData(login))

}
