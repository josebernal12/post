import { ICustomer } from '../interfaces/data.interfaces';


export const validCustomer = ({ name, email, address, state, barcode, phone, postcode, rfc, typeCustomer }: ICustomer) => { 

  if(name === undefined){
    return {
      isNull: true,
      message: 'name is required',
      status: 404
    }
  }
  if(email === undefined){
    return {
      isNull: true,
      message: 'email is required',
      status: 404
    }
  }
  if(address === undefined){
    return {
      isNull: true,
      message: 'addres is required',
      status: 404
    }
  }
  if(state === undefined){
    return {
      isNull: true,
      message: 'state is required',
      status: 404
    }
  }
  if(postcode === undefined){
    return {
      isNull: true,
      message: 'postcode is required',
      status: 404
    }
  }
  if(barcode === undefined){
    return {
      isNull: true,
      message: 'barcode is required',
      status: 404
    }
  }
  if(phone === undefined){
    return {
      isNull: true,
      message: 'phone is required',
      status: 404
    }
  }
  if(rfc === undefined){
    return {
      isNull: true,
      message: 'rfc is required',
      status: 404
    }
  }
  if(typeCustomer === undefined){
    return {
      isNull: true,
      message: 'typeCustomer is required',
      status: 404
    }
  }
}

export const isValidRFC = ({rfc}:ICustomer) => {
  const verifiedRfc = /^([A-ZÑ&]{3}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/
  
}