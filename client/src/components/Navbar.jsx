import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="flex flex-row items-center justify-between px-8 py-4 bg-black text-white border-b-2 border-black">
      <h1 className="flex items-center text-2xl font-bold p-2 rounded-3xl bg-white text-black">
        AJ
      </h1>

      <h1 className="text-3xl font-bold ml-25 font-serif">Student Dashboard</h1>

      <div className="flex items-center gap-8">
        <p className="text-lg font-semibold">Welcome, {user?.name || "User"}</p>

        <button className="border-2 border-white hover:bg-white hover:text-black px-3 py-1 transition duration-300">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
