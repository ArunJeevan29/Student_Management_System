import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        {/* <Dashboard /> */}
        <Students />
      </div>
    </div>
  );
}

export default App;
