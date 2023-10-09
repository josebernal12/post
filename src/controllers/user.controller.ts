import { Request, Response } from "express";
import { IUser } from '../interfaces/data.interfaces';
import UserServices from "../services/user.services";
class UserController {
  static async create(req: Request, res: Response) {
    const { name, email, password }: IUser = req.body
    const response = await UserServices.register(name, email, password)
    res.status(response.status).json({
      error: response.error,
      message: response.message,
      data: response.data,
      status: response.status
    })
  }

  static async login(req: Request, res: Response) {
    const { email, password }: IUser = req.body
    const response = await UserServices.login(email, password)
    res.status(response.status).json({
      error: response.error,
      message: response.message,
      data: {
        user: response.data,
        token: response.token
      },
      status: response.status
    })
  }
}

export default UserController