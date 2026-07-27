const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/Student");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(express.json());
app.use(studentRoutes);

mongoose
  .connect("mongodb://localhost:27017/studentDB")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server is running... ");
});
