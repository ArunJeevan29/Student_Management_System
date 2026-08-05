import { useState, } from "react";
import { useNavigate, Link } from "react-router-dom";
import { checkLogin } from "../api/authApi";
import { toast } from "react-hot-toast";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleLogin(event){
        event.preventDefault();
        try{
            const user = {email, password}
            const response = await checkLogin(user);
            localStorage.setItem("token", response.data.token);
            toast.success(response.data.message);
            navigate('/');
        } catch(error){
            toast.error(error.response?.data?.message || error.message);
        }
        
    }
    return(
        <div className="flex-1 flex flex-col justify-center items-center">
            <div className="flex flex-col border px-10 py-8 text-center gap-5">
                <h1 className="font-bold text-3xl">Login</h1>
                <form onSubmit={handleLogin} className="flex flex-col gap-6">
                    <label>Email</label>
                    <input className="border p-2" type="email" value={email} required onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email"/>
                    <label>Password</label>
                    <input className="border p-2" type="password" value={password} required onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"/>
                    <button type="submit" className="border-2 border-black p-2 font-bold cursor-pointer hover:bg-black hover:text-white transition duration-100">Login</button>
                </form>
                <p>Don't have an account? <Link to="/register" className="font-bold cursor-pointer hover:underline">Register</Link></p>
            </div>
        </div>
    )
}

export default Login;
