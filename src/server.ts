import express from 'express'
import 'dotenv/config'
import sequelize from './database/database'
import env from './utils/envalid'
import userRouter from './router/user.router'
const app = express()
const port = env.PORT
app.use(express.json())
app.use('/api/user', userRouter)


app.listen(port, () => {
  console.log(`server listening port to ${port}`)
  sequelize.authenticate()
})

