import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchStudents() {
      const response = await fetch("http://localhost:3000/students");
      const data = await response.json();
      setStudents(data);
    }
    fetchStudents();
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard students={students} />} />
          <Route
            path="/students"
            element={<Students students={students} setStudents={setStudents} />}
          />
          <Route
            path="/students/:id"
            element={<StudentDetails students={students} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
