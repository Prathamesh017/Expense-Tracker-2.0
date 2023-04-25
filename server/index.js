import express from 'express'
import dotenv from 'dotenv'
import dbconnect from './config/db.js'
import cors from 'cors'
import lodash from 'lodash'
import usersRouter from './routes/routes.js'
import bodyParser from 'body-parser'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
let _ = lodash

const app = express()
dotenv.config()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const PORT = process.env.PORT || 3001 // process.env is path to access all env variables;
await dbconnect()

if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname,"../client/build")));
    app.get("*",(req,res)=>res.sendFile(path.resolve(__dirname,'../','client',"build","index.html")))

}
app.use('/api/v1/expense', usersRouter)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
