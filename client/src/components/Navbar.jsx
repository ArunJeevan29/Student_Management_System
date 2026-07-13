function Navbar() {
    return(
        <nav className="flex flex-row items-center justify-between px-8 py-4 bg-black text-white ">
            <h1 className=" flex items-center text-2xl font-bold p-2 rounded-3xl bg-white text-black">AJ</h1>
            <h1 className="text-3xl font-bold ml-25 font-serif">Student Dashboard</h1>
            <div className="flex gap-8">
                <input type="text" placeholder="Search here..." className="border p-1 rounded-xs"/>
                <button className="border hover:text-black hover:bg-white px-3 py-1 transition duration-300 rounded-xs">Logout</button>
            </div>
        </nav>
    )
}

export default Navbar;