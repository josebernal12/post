export const validFieldLogin = (email: string , password: string | undefined) => {

  if (email === undefined) {
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
      isNull: false,
      message: 'all correct'
    }
  }
}