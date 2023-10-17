import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from 'cors';
import booksRoutes from "./routes/bookRoute.js";
require("dotenv").config();



const app = express();

//Middleware for parsing request body
app.use(express.json());

// app.use(cors({
//   origin: ' http://localhost:3000',
//   methods:['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type'],
// }))

// Allow requests from 'http://localhost:5173'
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get("/", (req, res) => {
  res.status(201).json({message: "Connected to Backend!"});
});

app.use('/books', booksRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("App connected to database");
    const PORT = process.env.PORT
    app.listen(PORT, () => {
      console.log(`App is listening port is ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
