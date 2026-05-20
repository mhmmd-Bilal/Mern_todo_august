import express from 'express'
import connectDb from './config/db.js'
import Todos from "./model/todoModel.js"

const app = express()

let port = 4000

connectDb()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

// app.httpMethod(route,handler)

// app.get('/getAll/users',(req,res)=>{
//     let person ={
//         name :"sam",
//         age : 18
//     }
//     res.send(person)
// })

app.get("/",async(req,res)=>{

    let todos =await Todos.find()

    res.send(todos)

})

app.post("/create" , async(req,res)=>{

    let {title,description} = req.body

    let todo = await Todos.create({
        title,
        description 
    })

    res.send(todo)

})


// http://localhost:4000

app.listen(port , ()=>console.log("server started"))