const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    dept: {
      type: String,
      required: true,
      trim: true,
    },
    cgpa: {
      type: Number,
      required: true,
    },
    placed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
