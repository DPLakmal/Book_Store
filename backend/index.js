import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import booksRoutes from "./routes/bookRoute.js";
import dotenv from 'dotenv';
dotenv.config();


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
  res.header("Access-Control-Allow-Origin", process.env.ALLOWED_ORIGIN);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const corsOptions = {
  origin: process.env.ALLOWED_ORIGIN || "http://localhost:5173", // or an array of allowed origins
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.status(201).json({ message: "Connected to Backend!" });
});

app.use("/api/v1/books", booksRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("App connected to database");
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log(`App is listening port is ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
