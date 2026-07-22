import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import { Routes, Route } from "react-router-dom"

function App() {
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
  },  {
    id: 8,
    name: "Sam",
    department: "ECE",
    cgpa: 9.2,
    placed: true,
  },
  {
    id: 9,
    name: "David",
    department: "EEE",
    cgpa: 7.9,
    placed: false,
  },
  {
    id: 10,
    name: "Jeevan",
    department: "AI & DS",
    cgpa: 9.0,
    placed: true,
  },
  {
    id: 11,
    name: "Rahul",
    department: "Mechanical",
    cgpa: 8.3,
    placed: false,
  },
]);

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard students={students} />}/>
          <Route path="/students" element={<Students students={students} setStudents={setStudents} />}/>
          <Route path="/students/:id" element={<StudentDetails students={students} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
