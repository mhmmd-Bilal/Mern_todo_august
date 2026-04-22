import express from 'express'
import connectDb from './config/db.js'

const app = express()

let port = 4000

connectDb()


app.listen(port , ()=>console.log("server started"))