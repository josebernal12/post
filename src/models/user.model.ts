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
  }
}, {
  timestamps: true
})

export default User