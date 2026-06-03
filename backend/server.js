import express from "express";
import connectDb from "./config/db.js";
import Todos from "./model/todoModel.js";
import todoRoutes from "./routes/todoRoutes.js";
import cors from "cors";
import userRoute from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";

const app = express();

let port = 4000;

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

// app.httpMethod(route,handler)

// http://localhost:4000/api/todo
app.use("/api/todo", todoRoutes);

app.use("/api/user", userRoute);

app.listen(port, () => console.log("server started"));
