import { useState } from "react";
import StudentCard from "../components/StudentCard";
import AddStudentForm from "../components/AddStudentForm";

function Students() {
  const [showForm, setShowForm] = useState(false);
  const [selectedStudent, setSelectedStudents] = useState(null);
  const [students, setStudents] = useState([
  {
    id: 1,
    name: "AJ",
    department: "AI & DS",
    cgpa: 8.7,
    placed: true,
  },
  {
    id: 2,
    name: "Arun",
    department: "CSE",
    cgpa: 8.4,
    placed: true,
  },
  {
    id: 3,
    name: "John",
    department: "IT",
    cgpa: 8.1,
    placed: false,
  },
  {
    id: 4,
    name: "Sam",
    department: "ECE",
    cgpa: 9.2,
    placed: true,
  },
  {
    id: 5,
    name: "David",
    department: "EEE",
    cgpa: 7.9,
    placed: false,
  },
  {
    id: 6,
    name: "Jeevan",
    department: "AI & DS",
    cgpa: 9.0,
    placed: true,
  },
  {
    id: 7,
    name: "Rahul",
    department: "Mechanical",
    cgpa: 8.3,
    placed: false,
  },
]);

    function handleShowForm(){
      setShowForm(false);
      setSelectedStudents(null);
    }

    function addStudent(newStudent){
      setStudents(prev => [...prev,newStudent]);
    }

    function deleteStudent(id){
      const newArray = students.filter((student) => student.id !== id);
      setStudents(newArray);
    }

    function updateStudent(editedStudent){
      students.map((student) => {
        if(student.id === editedStudent.id){
          student.name = editedStudent.name
          student.department = editedStudent.department
          student.cgpa = editedStudent.cgpa
          student.placed = editedStudent.placed
        }
      })
    }
    
    function changeSelectedStudents(student){
      setSelectedStudents(student);
      setShowForm(true);
    };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex justify-between px-8 py-4 bg-zinc-100 border-b border-zinc-400 items-center">
        <div>
          <h1 className="text-3xl font-bold ">Students List...!</h1>
          <p className="text-gray-500 mt-1">Manage all registered students.</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition duration-300 cursor-pointer"
        >
          + Add Students
        </button>
      </div>
      { students.length == 0 ? (
        <div className="flex flex-1 flex-col gap-4 text-center justify-center items-center bg-zinc-100">
            <h1 className="text-3xl font-bold">No Students Yet... </h1>
            <button
              onClick={() => setShowForm(true)}
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition duration-300 cursor-pointer"
              >
              + Add Students
            </button>
        </div>        
      ) : (
        <div className="flex-1 grid grid-cols-4 gap-6 p-6 bg-zinc-100 content-start">
          {students.map((student) => (
              <StudentCard 
              key={student.id}
              student = {student}
              deleteStudent = {deleteStudent}
              changeSelectedStudents={changeSelectedStudents}
              />
          ))}
        </div>
      )}
      {showForm && (
        <AddStudentForm handleShowForm={handleShowForm} addStudent={addStudent} updateStudent={updateStudent} selectedStudent={selectedStudent} />
      )}
    </div>
  );
}

export default Students;
