import { useState, } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api/authApi";
import { toast } from "react-hot-toast";

function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("student")

    async function handleRegister(event){
        event.preventDefault();
        try{
            const user = {name, email, password, role}
            const response = await registerUser(user);
            toast.success(response.data.message);
            navigate('/login');
        } catch(error){
            toast.error(error.response?.data?.message || error.message);
        }
    }
    return(
        <div className="flex-1 flex flex-col justify-center items-center">
            <div className="flex flex-col border px-10 py-8 text-center gap-5">
                <h1 className="font-bold text-3xl">Register</h1>
                <form onSubmit={handleRegister} className="flex flex-col gap-6">
                    <label>Name</label>
                    <input className="border p-2" type="text" value={name} required onChange={(e) => setName(e.target.value)} placeholder="Enter your Name"/>
                    <label>Email</label>
                    <input className="border p-2" type="email" value={email} required onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email"/>
                    <label>Password</label>
                    <input className="border p-2" type="password" value={password} required onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"/>
                    <select value={role} onChange={(e) => setRole(e.target.value)} className="border border-black p-3 ">
                        <option value="student">Student</option>
                        <option value="staff">Staff</option>
                    </select>
                    <button type="submit" className="border-2 border-black p-2 font-bold cursor-pointer hover:bg-black hover:text-white transition duration-100">Register</button>
                </form>
                <p>Already have account? <Link to="/login" className="font-bold cursor-pointer hover:underline">Login</Link></p>
            </div>
        </div>
    )
}

export default Register;
