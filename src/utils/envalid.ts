import { cleanEnv, str, port } from 'envalid'


const env = cleanEnv(process.env, {
  PORT: port(),
  MYSQLNAME: str(),
  MYSQLUSERNAME: str(),
  MYSQLPASSWORD: str(),
  PRIVATEKEY: str(),
  NAMETEST: str(),
  EMAILTEST: str(),
  PASSWORDTEST: str(),
  EMAILTESTDONTEXIST: str(),
  PASSWORDTESTDONTEXIST: str(),
})

export default env