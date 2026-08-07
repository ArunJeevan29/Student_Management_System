import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  function handleLogout() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login", { replace: true });
  }

  return (
    <aside className="flex flex-col w-64 bg-black text-white border-r border-black">
      <div className="flex flex-col py-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-white text-black border-b border-black px-6 py-4 font-bold"
              : "border-b border-black px-6 py-4 hover:bg-white hover:text-black transition"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/students"
          className={({ isActive }) =>
            isActive
              ? "bg-white text-black border-b border-black px-6 py-4 font-bold"
              : "border-b border-black px-6 py-4 hover:bg-white hover:text-black transition"
          }
        >
          Students
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "bg-white text-black border-b border-black px-6 py-4 font-bold"
              : "border-b border-black px-6 py-4 hover:bg-white hover:text-black transition"
          }
        >
          Profile
        </NavLink>

        <button className="border-b border-black left-0 px-6 py-4 hover:bg-white hover:text-black transition">
          Settings
        </button>
      </div>

      <div className="mt-auto">
        <div className="border-t border-black px-6 py-4 bg-white text-black">
          <p className="font-bold">{user?.name || "User"}</p>
          <p className="text-sm capitalize">
            <span className="font-bold">Role: </span>
            {user?.role || ""}
          </p>
        </div>

        <div
          onClick={handleLogout}
          className="border-t border-black px-6 py-4 text-left hover:bg-red-600 hover:text-white transition cursor-pointer"
        >
          Logout
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
