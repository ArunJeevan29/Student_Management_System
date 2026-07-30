import { memo } from "react";
import { useNavigate } from "react-router-dom";

function StudentCard({student,changeSelectedStudents, handleShowDelete}) {
    const navigate = useNavigate()

    function handleStudentCardClick() {
        navigate(`/students/${student._id}`);
    } 

    return(
        <div className="p-6 bg-white border-2 border-black rounded-xl hover:bg-black hover:text-white transition cursor-pointer group" onClick={handleStudentCardClick}>
            <div>
                <h2 className="text-2xl font-bold">{student.name}</h2>
                <h3 className="font-semibold group-hover:text-white mt-2">Dept: {student.department}</h3>
                <h3 className="font-semibold group-hover:text-white mt-2">CGPA: {student.cgpa}</h3>
                <h3 className="font-semibold group-hover:text-white mt-2">Placed: {student.placed ? "Yes" : "No"}</h3>
            </div>
            <div className="flex justify-between mt-6">
                <button onClick={(e) => {e.stopPropagation(); changeSelectedStudents(student)}} className="bg-black text-white px-4 py-2 border border-black hover:bg-white hover:text-black transition">Edit</button>
                <button className="bg-white text-black border border-black px-4 py-2 hover:bg-black hover:text-white transition" onClick={(e) =>{e.stopPropagation(); handleShowDelete(student)}}>Delete</button>
            </div>
        </div>
    )
}

export default memo(StudentCard);