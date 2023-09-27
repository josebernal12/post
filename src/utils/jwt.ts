import jwt from 'jsonwebtoken'
import env from '../utils/envalid'
export const CreateJsonWebToken = (id: string | undefined) => {
  const token = jwt.sign({ id }, env.PRIVATEKEY)
  return token
}