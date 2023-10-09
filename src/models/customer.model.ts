import { InferAttributes, InferCreationAttributes, DataTypes, Model } from "sequelize";
import sequelize from '../database/database'
import { ITypeCustomer } from "../interfaces/data.interfaces";

class Customer extends Model<InferAttributes<Customer>, InferCreationAttributes<Customer>>{

  declare id?: string
  declare name: string;
  declare email: string;
  declare address: string;
  declare state: string;
  declare rfc: string;
  declare phone: number;
  declare typeCustomer: ITypeCustomer
  declare postcode: string;
  declare barcode: string;

}

Customer.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rfc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  postcode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  barcode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  typeCustomer: {
    type: DataTypes.ENUM('personaMoral', 'personaFisica'),
    allowNull: false
  }
},{
  sequelize,
  tableName: 'customer'
})

export default Customer