import { IResponseApi } from "../interfaces/response.interfaces";
import { IUser } from "../interfaces/user.interfaces";
import User from "../models/user.model";
import { CreateJsonWebToken } from "../utils/jwt";
import { validFieldLogin } from "../utils/validLogin";
import { existEmail, validField } from "../utils/validRegister";
import bcrypt from 'bcrypt'
class UserServices {


  static async register(name: string, email: string, password: string): Promise<IResponseApi> {
    try {
      const isValid = validField(name, email, password)
      if (isValid.isNull) {
        return {
          error: isValid.isNull,
          message: isValid.message,
          status: isValid.status
        }
      }
      if (await existEmail(email)) {
        return {
          error: true,
          message: 'email ya existe',
          status: 500
        }
      }
      const passwordHash = await bcrypt.hash(password, 10)
      const user = await User.create({ name, email, password: passwordHash })
      if (user) {
        return {
          error: true,
          message: 'user registrado satisfactoriamente',
          data: user,
          status: 500
        }
      }
      return {
        error: true,
        message: 'usuario no existe',
        status: 500
      }
    } catch (error) {
      return {
        error: true,
        message: JSON.stringify(error),
        status: 500
      }
    }
  }

  static async login(email: string, password: string): Promise<IResponseApi> {
    try {

      const valid = validFieldLogin(email, password)
      if (valid.isNull) {
        return {
          error: valid.isNull,
          message: valid.message,
          status: 404
        }
      }

      const user = await User.findOne({ where: { email } })

      if (!user) {
        return {
          error: true,
          message: 'email no existe en la base de datos',
          status: 404
        }
      }

      const passwordHash = user.getDataValue('password')
      const isValidPassword = await bcrypt.compare(password, passwordHash)
      if (!isValidPassword) {
        return {
          error: true,
          message: 'password incorrecto',
          status: 404
        }
      }

      const id = user.getDataValue('id')
      const token = CreateJsonWebToken(id)
      return {
        error: false,
        message: 'login hecho satisfactoriamente',
        data: user,
        token,
        status: 404
      }
    } catch (error) {
      return {
        error: true,
        message: JSON.stringify(error),
        status: 500
      }
    }
  }
}

export default UserServices