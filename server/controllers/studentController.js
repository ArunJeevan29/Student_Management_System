const Student = require("../models/Student");

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    return res.status(200).json(students);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createStudent = async (req, res) => {
  try {
    const { name, department, cgpa } = req.body;
    if (!name || !department || !cgpa) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    const newStudent = {
      name,
      department,
      cgpa,
    };
    const student = await Student.create(newStudent);
    return res.status(201).json(student);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: "Student not Found" });
    }
    return res.status(200).json(student);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const editStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, department, cgpa, placed } = req.body;
    const student = await Student.findByIdAndUpdate(
      id,
      { name, department, cgpa, placed },
      { new: true },
    );
    if (!student) {
      return res.status(404).json({ message: "Student not Found" });
    }
    return res.status(200).json(student);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndDelete(id);
    if (!student) {
      return res.status(404).json({ message: "Student not Found" });
    }
    return res.status(200).json({ message: "Student deleted Successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getStudents,
  createStudent,
  getStudent,
  editStudent,
  deleteStudent,
};
