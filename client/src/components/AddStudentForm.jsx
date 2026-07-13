import { useState,useEffect } from "react";

function AddStudentForm({handleShowForm,addStudent,updateStudent,selectedStudent}) {
    const [name, setName] = useState("")
    const [dept, setDept] = useState("")
    const [cgpa, setCgpa] = useState(0)
    const [placed, setPlaced] = useState(false)

    useEffect(() => {
        setName(selectedStudent.name)
        setDept(selectedStudent.department)
        setCgpa(selectedStudent.cgpa)
        setPlaced(selectedStudent.placed)
    },[selectedStudent])

    function handleAddStudent(event){
        event.preventDefault();
        if(!name || !dept || cgpa <= 0){
            alert("Please fill all the fields");
            return;
        }
        
        const newStudent = {
            id: Date.now(),
            name,
            department: dept,
            cgpa,
            placed
        };

        const editedStudent = {
            id: selectedStudent.id,
            name,
            department: dept,
            cgpa,
            placed
        };

        if (selectedStudent){
            updateStudent(editedStudent)
        } else {
            addStudent(newStudent)
        }
        

        setName("")
        setDept("")
        setCgpa(0)
        setPlaced(false)
        
        handleShowForm();
    };

    return(
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl shadow-xl w-96">
                <h1 className="text-2xl font-bold mb-6">{selectedStudent ? "Edit Student" : "Add Student"}</h1>
                <form onSubmit={handleAddStudent} className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label className="font-medium mb-1">Name:</label>
                        <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter Student Name" className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-black"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium mb-1">Dept:</label>
                        <input type="text" value={dept} onChange={(event) => setDept(event.target.value)} placeholder="Enter department" className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-black"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium mb-1">CGPA:</label>
                        <input type="number" value={cgpa} onChange={(event) => setCgpa(Number(event.target.value))} placeholder="Enter CGPA" className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-black"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium mb-1">Placed:</label>
                        <select className="border p-3"
                            value={placed}
                            onChange={(e) => setPlaced(e.target.value === "true")}
                        >
                            <option value="true">Placed</option>
                            <option value="false">Not Placed</option>
                        </select>
                    </div>
                    <div className="flex justify-end gap-4 mt-6">
                        <button type="button" onClick={handleShowForm} className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-black text-white rounded-lg hover:bg-zinc-800 transition">{selectedStudent ? "Update" : "Add Student"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddStudentForm;