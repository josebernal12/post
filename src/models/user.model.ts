import { Model, InferAttributes, InferCreationAttributes, DataTypes } from "sequelize";
import sequelize from '../database/database'
class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id? : string
  declare name: string
  declare email: string
  declare password: string
  declare rol?: string


}
User.init({
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
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rol: {
    type: DataTypes.ENUM('admin', 'empleado'),
    defaultValue: 'empleado'
  },

},
  {
    sequelize,
    tableName: 'users'
  }
)
export default User