function Navbar() {
    return(
        <nav className="flex flex-row items-center justify-between px-8 py-4 bg-black text-white border-b-2 border-black">
            <h1 className=" flex items-center text-2xl font-bold p-2 rounded-3xl bg-white text-black">AJ</h1>
            <h1 className="text-3xl font-bold ml-25 font-serif">Student Dashboard</h1>
            <div className="flex gap-8">
                <input type="text" placeholder="Search here..." className="border-2 border-white p-1 bg-black text-white placeholder-gray-300 outline-none"/>
                <button className="border-2 border-white hover:bg-white hover:text-black px-3 py-1 transition duration-300">Logout</button>
            </div>
        </nav>
    )
}

export default Navbar;