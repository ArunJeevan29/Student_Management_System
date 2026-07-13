import Students from "../pages/Students";

function StudentCard({student,deleteStudent,changeSelectedStudents}) {
    return(
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <div>
                <h2 className="text-2xl font-bold">{student.name}</h2>
                <h3 className="text-gray-500 mt-2">Dept: {student.department}</h3>
                <h3 className="font-semibold mt-2">CGPA: {student.cgpa}</h3>
                <h3 className="font-semibold mt-2">Placed: {student.placed ? "Yes" : "No"}</h3>
            </div>
            <div className="flex justify-between mt-6">
                <button onClick={() => changeSelectedStudents(student)} className="bg-black text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition">Edit</button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition" onClick={() => {deleteStudent(student.id)}}>Delete</button>
            </div>
        </div>
    )
}

export default StudentCard;