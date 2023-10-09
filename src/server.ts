import express from 'express'
import 'dotenv/config'
import sequelize from './database/database'
import env from './utils/envalid'
import userRouter from './router/user.router'
import customerRouter from './router/customer.router'

const app = express()
const port = env.PORT
app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/customer', customerRouter)

app.listen(port)
console.log(`server listening to port ${port}`)
sequelize.authenticate()
export default app