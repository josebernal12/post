import { DataTypes } from 'sequelize'
import sequelize from '../database/database'

const User = sequelize.define('User', {

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
  }
}, {
  timestamps: true
})

export default User