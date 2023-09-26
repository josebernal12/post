import User from '../models/user.model'
export const existEmail = async (email: string): Promise<boolean> => {
  const emailDB = await User.findOne({ where: { email } })
  if (emailDB !== null) {
    return true
  }
  return false
}

export const validField = (name: string | null, email: string | null, password: string | null) => {
  if (name === undefined) {
    return {
      isNull: true,
      message: 'name is required'
    }
  }
  else if (email === undefined) {
    return {
      isNull: true,
      message: 'email is required'
    }
  }
  else if (password === undefined) {
    return {
      isNull: true,
      message: 'password is required'
    }
  }
  else {
    return {
      isNull: false
    }
  }
}

