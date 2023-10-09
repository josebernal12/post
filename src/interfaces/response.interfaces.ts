import { ICustomer, IUser } from "./data.interfaces";
interface IResponse {
  error: boolean;
  message: string;
  status: number;
}
export interface IResponseApi {
  error: boolean;
  message?: string;
  data?: IUser;
  token?: string;
  status: number;
}

export interface IResponseCustomer extends IResponse {
  customer?: ICustomer;
}