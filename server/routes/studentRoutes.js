const express = require("express");
const router = express.Router();
const {
  getStudents,
  createStudent,
  getStudent,
  editStudent,
  deleteStudent,
} = require("../controllers/studentController");

router.get("/", getStudents);
router.post("/", createStudent);
router.get("/:id", getStudent);
router.put("/:id", editStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
