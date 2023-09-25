import express from 'express'
import 'dotenv/config'
import sequelize from './database/database'
import env from './utils/envalid'

const app = express()
const port = env.PORT



app.listen(port, () => {
  console.log(`server listening port to ${port}`)
  sequelize.authenticate()
})

