export interface IUser {
  name: string,
  email: string,
  password: string

}
export interface ITypeCustomer {
  personaMoral: string;
  personaFisica: string
}
export interface ICustomer {
  name: string;
  email: string;
  address: string;
  state: string;
  rfc: string;
  phone: number;
  typeCustomer: ITypeCustomer
  postcode: string;
  barcode: string;
}