import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  response.status(200).send("Novsgd");
});



mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`App is listening port is ${PORT}`);
      });
  })
  .catch((error) => {
    console.log(error);
  });
