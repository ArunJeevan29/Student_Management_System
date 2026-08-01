import { toast } from "react-hot-toast";
import { deleteStudent } from "../api/studentApi";
function DeleteModal({
  handleCancelShowDelete,
  selectedDeleteStudent,
  fetchStudents,
}) {
  async function handleDelete() {
    try {
      const response = await deleteStudent(selectedDeleteStudent._id);
      toast.success(response.data.message);
      await fetchStudents();
      handleCancelShowDelete();
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  }
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="border-2 border-black flex flex-col justify-between h-52 bg-white p-10 shadow-xl w-96">
        <h1 className="text-xl font-bold">
          Do you want to delete {selectedDeleteStudent.name}...?
        </h1>
        <div className="flex justify-between p-10">
          <button
            onClick={handleCancelShowDelete}
            className="border border-black px-4 py-2 cursor-pointer bg-white text-black hover:bg-black hover:text-white transition"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 text-white bg-black border border-black cursor-pointer hover:bg-white hover:text-black transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
