import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  const [students, setStudents] = useState([]);

  async function fetchStudents() {
    const response = await fetch("http://localhost:3000/students");
    const data = await response.json();
    setStudents(data);
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "black",
            color: "white",
            border: "2px solid white",
            borderRadius: "4px",
            fontWeight: "600",
            padding: "14px",
          },
        }}
      />
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard students={students} />} />
          <Route
            path="/students"
            element={
              <Students
                students={students}
                setStudents={setStudents}
                fetchStudents={fetchStudents}
              />
            }
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
