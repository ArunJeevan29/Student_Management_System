import { useState, useMemo } from "react";
import StudentCard from "../components/StudentCard";
import AddStudentForm from "../components/AddStudentForm";
import DeleteModal from "../components/DeleteModal";

function Students({ students, setStudents }) {
  const [showForm, setShowForm] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showDeletedModal, setShowDeletedModal] = useState(false);
  const [selectedDeleteStudent, setSelectedDeleteStudent] = useState(null);
  const [searchStudent, setSearchStudent] = useState("")
  const [sortBy, setSortBy] = useState("name-asc")
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 8;
  
  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      return student.name.toLowerCase().includes(searchStudent.toLowerCase());
    })
  },[students, searchStudent])
  
  
  const sortedStudents = useMemo(() => {
    const sorted = [...filteredStudents];

    if(sortBy === "name-asc"){
      sorted.sort((a,b) => a.name.localeCompare(b.name));
    }
    else if(sortBy === "name-desc"){
      sorted.sort((a,b) => b.name.localeCompare(a.name));
    }
    else if(sortBy === "cgpa-high"){
      sorted.sort((a,b) => b.cgpa - a.cgpa);
    }
    else if(sortBy === "cgpa-low"){
      sorted.sort((a,b) => a.cgpa - b.cgpa);
    }
    return sorted
  }, [filteredStudents,sortBy]);
  


  const currentStudents = sortedStudents.slice((currentPage - 1) * studentsPerPage, currentPage * studentsPerPage);
  const totalPages = Math.ceil(sortedStudents.length / studentsPerPage);
  
  function addStudent(newStudent){
    setStudents(prev => [...prev,newStudent]);
  }
  
  function updateStudent(editedStudent) {
    const updatedStudents = students.map((student) => {
      if (student.id === editedStudent.id) {
        return editedStudent;
      }
      
      return student;
    });
    
    setStudents(updatedStudents);
  }
  
  function changeSelectedStudents(student){
    setSelectedStudent(student);
    setShowForm(true);
  };

  function handleShowForm(){
    setShowForm(false); 
    setSelectedStudent(null);
  }
  
  function deleteStudent(id){
    const newArray = students.filter((student) => student.id !== id);
    const newTotalPages = Math.ceil(newArray.length / studentsPerPage)
    if (currentPage > newTotalPages){
      setCurrentPage(Math.max(1,newTotalPages))
    }
    setStudents(newArray);
    setShowDeletedModal(false);
  }

  function handleShowDelete(student){
    setSelectedDeleteStudent(student)
    setShowDeletedModal(true);
  }

  function handleCancelShowDelete(){
    setSelectedDeleteStudent(null);
    setShowDeletedModal(false);
  }

  return (
    <div className="flex flex-col flex-1">
      <div className="flex justify-between px-8 py-4 bg-zinc-100 border-b border-zinc-400 items-center">
        <div>
          <h1 className="text-3xl font-bold ">Students List...!</h1>
          <p className="text-gray-500 mt-1">Manage all registered students.</p>
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex items-center gap-5">
            <p className="font-bold">Sort By:</p>
            <select value={sortBy} className="border p-3" onChange={(event) => {setSortBy(event.target.value); setCurrentPage(1);}}>
              <option value="name-asc">Name (ASC)</option>
              <option value="name-desc">Name (Desc)</option>
              <option value="cgpa-high">Cgpa (Highest)</option>
              <option value="cgpa-low">Cgpa (Lowest)</option>
            </select>
          </div>
          <input type="text" value={searchStudent} onChange={(event) => {setSearchStudent(event.target.value); setCurrentPage(1);}} className="border p-1" placeholder="Search Student"/>
          <button
            onClick={() => setShowForm(true)}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition duration-300 cursor-pointer"
          >
            + Add Students
          </button>
        </div>
      </div>
      { students.length == 0 ? (
        <div className="flex flex-1 flex-col gap-4 text-center justify-center items-center bg-zinc-100">
            <h1 className="text-3xl font-bold">No Students Yet... </h1>
            <button
              onClick={() => setShowForm(true)}
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition duration-300 cursor-pointer"
              >
              + Add Students
            </button>
        </div>        
      ) : filteredStudents.length === 0 ? (
        <div className="flex flex-1 flex-col gap-4 text-center justify-center items-center bg-zinc-100">
            <h1 className="text-3xl font-bold">No Students Found... </h1>
        </div>  
      ) : (
        <>
          <div className="flex-1 grid grid-cols-4 gap-6 p-6 bg-zinc-100 content-start">
            {currentStudents.map((student) => (
                <StudentCard 
                key={student.id}
                student = {student}
                changeSelectedStudents={changeSelectedStudents}
                handleShowDelete = {handleShowDelete}
                />
            ))}
          </div>
          <div className="flex justify-center items-center gap-4 py-6 bg-zinc-100">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage-1)} className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100 disabled:bg-gray-300 disabled:cursor-not-allowed">← Previous</button>
            {
              Array.from({length: totalPages}, (_, index) => (
                <button key={index} onClick={() => setCurrentPage(index + 1)} className={`px-3 py-2 border rounded-lg ${currentPage === index + 1 ? "bg-black text-white" : "bg-white hover:bg-gray-100"}`}>
                  {index + 1}
                </button>
              ))
            }
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage+1)} className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100 disabled:bg-gray-300 disabled:cursor-not-allowed" >Next →</button>
          </div>
        </>
      )}
      {showForm && (
        <AddStudentForm handleShowForm={handleShowForm} addStudent={addStudent} updateStudent={updateStudent} selectedStudent={selectedStudent} />
      )}

      {showDeletedModal && (
        <DeleteModal deleteStudent={deleteStudent} handleCancelShowDelete={handleCancelShowDelete} selectedDeleteStudent={selectedDeleteStudent} />
      )}
    </div>
    
  );
}
export default Students;
