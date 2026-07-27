const express = require("express");
const router = express.Router();
const {
  getStudents,
  createStudent,
  getStudent,
  editStudent,
  deleteStudent,
} = require("../controllers/studentController");

router.get("/students", getStudents);
router.post("/students", createStudent);
router.get("/students/:id", getStudent);
router.put("/students/:id", editStudent);
router.delete("/students/:id", deleteStudent);

module.exports = router;
