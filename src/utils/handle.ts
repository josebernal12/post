import { Response } from "express"
import { ICustomer, IUser } from "../interfaces/data.interfaces"

export const handleResponse = (error: boolean, message: string, status: number, data?: IUser, token?: string) => {
  return {
    error,
    message,
    data,
    token,
    status
  }
}

export const handleResponseCustomer = (error: boolean, message: string, status: number, customer?: ICustomer) => {
  return {
    error,
    message,
    customer,
    status,
  }
}



