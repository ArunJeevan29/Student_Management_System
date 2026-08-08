const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  getStudents,
  createStudent,
  getStudent,
  editStudent,
  deleteStudent,
} = require("../controllers/studentController");

router.get("/", authMiddleware, getStudents);
router.post("/", authMiddleware, createStudent);
router.get("/:id", authMiddleware, getStudent);
router.put("/:id", authMiddleware, editStudent);
router.delete("/:id", authMiddleware, deleteStudent);

module.exports = router;
