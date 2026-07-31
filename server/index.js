const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Student = require("./models/Student");
const studentRoutes = require("./routes/studentRoutes");
const loggerMiddleware = require("./middleware/loggerMiddleware");

const app = express();

app.use(express.json());
app.use(cors());
app.use(loggerMiddleware);
app.use(studentRoutes);

mongoose
  .connect("mongodb://localhost:27017/studentDB")
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server is running... ");
});
