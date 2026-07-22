function DeleteModal({deleteStudent, handleCancelShowDelete,selectedDeleteStudent}) {
    return(
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
            <div className="border flex flex-col justify-between h-52 bg-white p-10 rounded-xl shadow-xl w-96">
                <h1 className="text-xl font-bold">Do you want to delete {selectedDeleteStudent.name}...?</h1>
                <div className="flex justify-between p-10">
                    <button onClick={handleCancelShowDelete} className="border px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-100">Cancel</button>
                    <button onClick={() => deleteStudent(selectedDeleteStudent.id)} className="px-4 py-2 text-white bg-red-600 rounded-lg cursor-pointer hover:bg-red-700">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal