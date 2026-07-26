const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/Student");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/studentDB")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

let students = [
  { id: 1, name: "AJ", dept: "AI & DS" },
  { id: 2, name: "Rahul", dept: "CSE" },
];

app.get("/students", (req, res) => {
  res.send(students);
});

app.post("/students", async (req, res) => {
  try {
    const { name, dept, cgpa } = req.body;
    if (!name || !dept || !cgpa) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    const newStudent = {
      name,
      dept,
      cgpa,
    };

    const student = await Student.create(newStudent);
    res.status(201).json(student);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not Found" });
  }
  res.json(student);
});

app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  student.name = req.body.name;
  student.dept = req.body.dept;
  res.json(student);
});

app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = students.findIndex((s) => s.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }
  student.splice(index, 1);
  res.json({ message: "Student deleted Successfully" });
});

app.listen(3000, () => {
  console.log("Server is running... ");
});
