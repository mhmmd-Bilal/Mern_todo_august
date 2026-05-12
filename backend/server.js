import express from 'express'
import connectDb from './config/db.js'

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


// http://localhost:4000

app.listen(port , ()=>console.log("server started"))