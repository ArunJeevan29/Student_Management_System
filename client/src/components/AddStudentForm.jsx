import { useState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";

function AddStudentForm({ handleShowForm, fetchStudents, selectedStudent }) {
  const [name, setName] = useState("");
  const [department, setdepartment] = useState("");
  const [cgpa, setCgpa] = useState(0);
  const [placed, setPlaced] = useState(false);
  const [errors, setError] = useState({
    name: "",
    department: "",
    cgpa: "",
  });
  const nameRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    if (selectedStudent) {
      setName(selectedStudent.name);
      setdepartment(selectedStudent.department);
      setCgpa(selectedStudent.cgpa);
      setPlaced(selectedStudent.placed);
    }
  }, [selectedStudent]);

  async function handleAddStudent(event) {
    event.preventDefault();

    const newErrors = {
      name: "",
      department: "",
      cgpa: "",
    };

    if (name.trim().length === 0) {
      newErrors.name = "Name is Required";
    }

    if (department.trim().length === 0) {
      newErrors.department = "Department is Required";
    }

    if (cgpa < 0 || cgpa > 10) {
      newErrors.cgpa = "CGPA must be between 0 and 10";
    }

    setError(newErrors);
    const errorValues = Object.values(newErrors);
    const isError = errorValues.some((error) => error !== "");
    if (isError) {
      return;
    }

    try {
      if (selectedStudent) {
        const editedStudent = {
          name,
          department,
          cgpa,
          placed,
        };
        const response = await fetch(
          `http://localhost:3000/students/${selectedStudent._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(editedStudent),
          },
        );
        const data = await response.json();
        if (response.ok) {
          await fetchStudents();
          toast.success(data.message);
          handleShowForm();
        } else {
          toast.error(data.message);
        }
      } else {
        const newStudent = {
          name,
          department,
          cgpa,
          placed,
        };

        const response = await fetch("http://localhost:3000/students", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newStudent),
        });
        const data = await response.json();
        if (response.ok) {
          await fetchStudents();
          toast.success(data.message);

          setName("");
          setdepartment("");
          setCgpa(0);
          setPlaced(false);

          setError({
            name: "",
            department: "",
            cgpa: "",
          });
          handleShowForm();
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 border-2 border-black w-96 shadow-xl">
        <h1 className="text-2xl font-bold mb-6">
          {selectedStudent ? "Edit Student" : "Add Student"}
        </h1>
        <form onSubmit={handleAddStudent} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="font-medium mb-1">Name:</label>
            <input
              ref={nameRef}
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter Student Name"
              className="border-2 border-black px-3 py-2 outline-none focus:ring-2 focus:ring-black"
            />
            {errors.name && (
              <p className="text-black font-bold text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">Dept:</label>
            <input
              type="text"
              value={department}
              onChange={(event) => setdepartment(event.target.value)}
              placeholder="Enter department"
              className="border-2 border-black px-3 py-2 outline-none focus:ring-2 focus:ring-black"
            />
            {errors.department && (
              <p className="text-black font-bold text-sm mt-1">
                {errors.department}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">CGPA:</label>
            <input
              type="number"
              value={cgpa}
              onChange={(event) => setCgpa(Number(event.target.value))}
              placeholder="Enter CGPA"
              className="border-2 border-black px-3 py-2 outline-none focus:ring-2 focus:ring-black"
            />
            {errors.cgpa && (
              <p className="text-black font-bold text-sm mt-1">{errors.cgpa}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">Placed:</label>
            <select
              className="border-2 border-black p-3 bg-white text-black"
              value={placed.toString()}
              onChange={(e) => setPlaced(e.target.value === "true")}
            >
              <option value="true">Placed</option>
              <option value="false">Not Placed</option>
            </select>
          </div>
          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={handleShowForm}
              className="px-4 py-2 border-2 border-black bg-white text-black hover:bg-black hover:text-white transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition"
            >
              {selectedStudent ? "Update" : "Add Student"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStudentForm;
