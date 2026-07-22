import { NavLink } from "react-router-dom"; 

function Sidebar() {
    return(
        <aside className="flex flex-col w-64 bg-zinc-900 text-white">
            <div className="flex flex-col py-6">
                <NavLink to="/" className={({isActive}) => isActive ? "bg-zinc-700 border-b px-6 py-4" : "border-b px-6 py-4 hover:bg-zinc-800"}>Dashboard</NavLink>
                <NavLink to="/students" className={({isActive}) => isActive ? "bg-zinc-700 border-b px-6 py-4" : "border-b px-6 py-4 hover:bg-zinc-800"}>Students</NavLink>
                <button className="border-b left-0 px-6 py-4 hover:bg-zinc-800 transition">Profile</button>
                <button className="border-b left-0 px-6 py-4 hover:bg-zinc-800 transition">Settings</button>
            </div>
        </aside>
    )
}

export default Sidebar;