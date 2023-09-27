import { IUser } from "./user.interfaces";

export interface IResponseApi {
  error: boolean;
  message?: string;
  data?: IUser;
  token?:string;
  status: number;
}