import { NavLink } from "react-router-dom"; 

function Sidebar() {
    return(
        <aside className="flex flex-col w-64 bg-black text-white border-r border-black">
            <div className="flex flex-col py-6">
                <NavLink to="/" className={({isActive}) => isActive ? "bg-white text-black border-b border-black px-6 py-4 font-bold" : "border-b border-black px-6 py-4 hover:bg-white hover:text-black transition"}>Dashboard</NavLink>
                <NavLink to="/students" className={({isActive}) => isActive ? "bg-white text-black border-b border-black px-6 py-4 font-bold" : "border-b border-black px-6 py-4 hover:bg-white hover:text-black transition"}>Students</NavLink>
                <button className="border-b border-black left-0 px-6 py-4 hover:bg-white hover:text-black transition">Profile</button>
                <button className="border-b border-black left-0 px-6 py-4 hover:bg-white hover:text-black transition">Settings</button>
            </div>
        </aside>
    )
}

export default Sidebar;