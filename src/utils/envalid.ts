import { cleanEnv, str, port } from 'envalid'


const env = cleanEnv(process.env, {
  PORT: port(),
  MYSQLNAME: str(),
  MYSQLUSERNAME: str(),
  MYSQLPASSWORD: str(),
  PRIVATEKEY: str()
})

export default env