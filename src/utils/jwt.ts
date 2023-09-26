import jwt from 'jsonwebtoken'
import env from '../utils/envalid'
export const CreateJsonWebToken = (id: string) => {
  const token = jwt.sign({ id }, env.PRIVATEKEY)
  return token
}