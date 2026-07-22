import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function StudentDetails({ students }) {
  const { id } = useParams();
  const navigate = useNavigate()

  const student = students.find((student) => student.id === Number(id));
  console.log(student);

  return (
    <>
      {student ? (
        <div className="flex justify-center items-center bg-gray-100 p-8 w-full">
          <div className="bg-white shadow-lg rounded-xl p-8 w-125">
            <h1 className="text-3xl font-bold mb-8">Student Profile</h1>
            <div className="space-y-5">
              <div className="flex justify-between">
                <span className="font-semibold">Name</span>
                <span>{student.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Department</span>
                <span>{student.department}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">CGPA</span>
                <span>{student.cgpa}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Placed</span>
                <span>{student.placed ? "✅ Yes" : "❌ No"}</span>
              </div>
              <div className="mt-8">
                <button onClick={() => navigate(-1)} className="bg-black text-white px-5 py-2 rounded-lg hover:bg-zinc-800 transition">← Back</button>
              </div>
            </div>
          </div>
        </div>
        
      ) : (
        <div className="p-8">
          <h1>Student Not Found</h1>
        </div>
      )}
    </>
  );
}

export default StudentDetails;
