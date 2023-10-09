import { ICustomer } from '../interfaces/data.interfaces';
import { IResponseCustomer } from '../interfaces/response.interfaces';
import Customer from '../models/customer.model';
import { handleResponseCustomer } from '../utils/handle';
import { validCustomer } from '../utils/validCustomer';

class CustomerServices {

  getAllCustomer() { }
  getByIdCustomer() { }
  async addCustomer(customer: ICustomer): Promise<IResponseCustomer> {
    try {
      const isValid = validCustomer(customer)
      if (isValid) {
        return handleResponseCustomer(isValid.isNull, isValid.message, isValid.status)
      }
      const newCustomer = await Customer.create(customer)
      if (!newCustomer) {
        return handleResponseCustomer(true, 'data invalid', 404)
      }
      return handleResponseCustomer(false, 'cliente creado', 200, newCustomer)
    } catch (error) {
      return handleResponseCustomer(true, JSON.stringify(error), 500)
    }
  }
  putCustomer() { }
  deleteCustomer() { }
}