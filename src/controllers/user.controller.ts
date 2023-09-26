import { Request, Response } from "express";
import User from "../models/user.model";
import { IUser } from '../interfaces/user.interfaces';
import { existEmail, validField } from "../utils/validRegister";
import bcrypt from 'bcrypt'
import { validFieldLogin } from "../utils/validLogin";
import { CreateJsonWebToken } from "../utils/jwt";
class UserController {
  static async create(req: Request, res: Response) {
    try {
      const { name, email, password }: IUser = req.body
      const isValid = validField(name, email, password)
      if (isValid.isNull) {
        return res.json({ error: isValid.message })
      }
      if (await existEmail(email)) {
        return res.json({ error: 'el email ya existe en la base de datos' })
      }
      const passwordHash = await bcrypt.hash(password, 10)
      const user = await User.create({ name, email, password: passwordHash })
      if (user) {
        return res.json(user)
      }
      return res.json({
        error: 'usuario no exist'
      })
    } catch (error) {
      console.log(error)
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password }: IUser = req.body

      const valid = validFieldLogin(email, password)
      if (valid.isNull) {
        return res.json({
          error: valid.message
        })
      }

      const user = await User.findOne({ where: { email } })

      if (!user) {
        return res.json({ error: 'email no existe en la base de datos' })
      }

      const passwordHash = user.getDataValue('password')
      const isValidPassword = await bcrypt.compare(password, passwordHash)
      if (!isValidPassword) {
        return res.json({ error: 'el password es incorrecto' })
      }
      
      const id = user.getDataValue('id')
      const token = CreateJsonWebToken(id)
      res.json({
        data: user,
        token
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default UserController