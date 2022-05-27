import express from 'express'
import { Sequelize } from 'sequelize'
import db from './models/index'
import 'dotenv/config'
import cors from 'cors'
import provinceRoutes from './routes/provinceRoutes'
import districtRoutes from './routes/districtRoutes'
import sectorRoutes from './routes/sectorRoutes'
const port = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(cors())


app.use('/api/v1', provinceRoutes)
app.use('/api/v1', districtRoutes)
app.use('/api/v1', sectorRoutes)

app.listen(port, ()=>{
    console.log('Server is running on', port)

})
const {sequelize} = db
sequelize.authenticate()
.then(() => {
    console.log('DEV DB CONNECTED...');
  })
  .catch((err) => {
    console.log('Unable to connect to the database: ', err);
  });