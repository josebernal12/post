import { IResponseApi } from "../interfaces/response.interfaces";
import User from "../models/user.model";
import { handleResponse } from '../utils/handle';
import { CreateJsonWebToken } from "../utils/jwt";
import { validFieldLogin } from "../utils/validLogin";
import { existEmail, validField } from "../utils/validRegister";
import bcrypt from 'bcrypt'
class UserServices {
  static async register(name: string, email: string, password: string): Promise<IResponseApi> {
    try {
      const isValid = validField(name, email, password)
      if (isValid.isNull) {
        return handleResponse(isValid.isNull, isValid.message, isValid.status)
      }
      if (await existEmail(email)) {
        return handleResponse(true, 'email ya existe', 404)
      }
      const passwordHash = await bcrypt.hash(password, 10)
      const user = await User.create({ name, email, password: passwordHash })
      if (user) {
        return handleResponse(false, 'usuario registrado satisfactoriamente', 200, user)
      }
      return handleResponse(true, 'usuario no existe', 404)
    } catch (error) {
      return handleResponse(true, JSON.stringify(error), 500)
    }
  }

  static async login(email: string, password: string): Promise<IResponseApi> {
    try {
      const valid = validFieldLogin(email, password)
      if (valid.isNull) {
        return handleResponse(valid.isNull, valid.message, 404)
      }
      const user = await User.findOne({ where: { email } })

      if (!user) {
        return handleResponse(true, 'email no existe en la base de datos', 404)
      }

      const passwordHash = user.getDataValue('password')
      const isValidPassword = await bcrypt.compare(password, passwordHash)
      if (!isValidPassword) {
        return handleResponse(true, 'password incorrecto', 404)
      }
      const id = user.getDataValue('id')
      const token = CreateJsonWebToken(id)
      return handleResponse(false, 'login hecho satisfactoriamente', 200, user, token)
    } catch (error) {
      return handleResponse(true, JSON.stringify(error), 500)
    }
  }
}

export default UserServices