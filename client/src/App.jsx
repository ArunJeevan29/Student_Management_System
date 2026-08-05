import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

import { getStudents } from "./api/studentApi";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDetails from "./pages/StudentDetails";

function App() {
  const [students, setStudents] = useState([]);

  const location = useLocation();
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/register";

  async function fetchStudents() {
    try {
      const response = await getStudents();
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
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

      {!hideLayout && <Navbar />}
      <div className="flex flex-1">
        {!hideLayout && <Sidebar />}
        <Routes>
          <Route path="/" element={<Dashboard students={students} />} />
          <Route
            path="/students"
            element={
              <Students students={students} fetchStudents={fetchStudents} />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
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
