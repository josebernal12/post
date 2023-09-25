import { Sequelize } from 'sequelize'
import env from '../utils/envalid'

const sequelize = new Sequelize(env.MYSQLNAME, env.MYSQLUSERNAME, env.MYSQLPASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
})

export default sequelize
