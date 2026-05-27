import express from 'express'
import connectDb from './config/db.js'
import Todos from "./model/todoModel.js"
import todoRoutes from "./routes/todoRoutes.js"
import cors from "cors"

const app = express()

let port = 4000

connectDb()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(cors())

// app.httpMethod(route,handler)


// http://localhost:4000/api/todo
app.use("/api/todo", todoRoutes)


app.listen(port , ()=>console.log("server started"))