import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { checkLogin } from "../api/authApi";
import { toast } from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const user = { email, password };

      const response = await checkLogin(user);

      localStorage.setItem("token", response.data.token);

      toast.success(response.data.message);

      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  }

  return (
    <div className="flex-1 min-h-screen bg-gray-100 flex justify-center items-center px-6">
      <div className="bg-white border-2 border-black rounded-2xl shadow-2xl overflow-hidden flex w-full max-w-6xl">
        {/* Left Section */}

        <div className="w-1/2 bg-black text-white p-14 flex flex-col justify-center">
          <h1 className="text-5xl font-extrabold">Student Dashboard</h1>

          <p className="mt-6 text-lg text-gray-300 leading-8">
            A modern student management system to organize records, monitor
            academic performance and securely manage users with role-based
            authentication.
          </p>

          <div className="mt-12 space-y-5 text-lg">
            <p>✔ Student Management</p>
            <p>✔ Secure Authentication</p>
            <p>✔ Dashboard Analytics</p>
            <p>✔ Role Based Access</p>
          </div>
        </div>

        {/* Right Section */}

        <div className="w-1/2 p-14 flex flex-col justify-center">
          <h2 className="text-4xl font-bold">Welcome Back</h2>

          <p className="text-gray-600 mt-3 mb-10">
            Login to continue to your dashboard.
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block font-semibold mb-2">Email</label>

              <input
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border-2 border-black rounded-lg px-4 py-3 outline-none focus:bg-gray-100 transition"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Password</label>

              <input
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full border-2 border-black rounded-lg px-4 py-3 outline-none focus:bg-gray-100 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white border-2 border-black rounded-lg py-3 font-bold hover:bg-white hover:text-black transition cursor-pointer"
            >
              Login
            </button>
          </form>

          <p className="mt-8 text-center text-gray-700">
            Don't have an account?{" "}
            <Link to="/register" className="font-bold hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
