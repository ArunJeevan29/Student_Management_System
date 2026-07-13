function Sidebar() {
    return(
        <aside className="flex flex-col w-64 bg-zinc-900 text-white">
            <div className="flex flex-col py-6">
                <button className="border-b left-0 px-6 py-4 hover:bg-zinc-800 transition">Dashboard</button>
                <button className="border-b left-0 px-6 py-4 hover:bg-zinc-800 transition">Students</button>
                <button className="border-b left-0 px-6 py-4 hover:bg-zinc-800 transition">Profile</button>
                <button className="border-b left-0 px-6 py-4 hover:bg-zinc-800 transition">Settings</button>
            </div>
        </aside>
    )
}

export default Sidebar;