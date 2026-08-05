require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/Student");
const cors = require("cors");
const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");
const loggerMiddleware = require("./middleware/loggerMiddleware");

const app = express();

app.use(express.json());
app.use(cors());
app.use(loggerMiddleware);
app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(process.env.PORT, () => {
  console.log("Server is running... ");
});
