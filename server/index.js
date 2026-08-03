const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Student = require("./models/Student");
const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");
const loggerMiddleware = require("./middleware/loggerMiddleware");

const app = express();

app.use(express.json());
app.use(cors());
app.use(loggerMiddleware);
app.use(studentRoutes);
app.use(authRoutes);

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
