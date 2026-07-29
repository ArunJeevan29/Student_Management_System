import { toast } from "react-hot-toast";
function DeleteModal({
  handleCancelShowDelete,
  selectedDeleteStudent,
  fetchStudents,
}) {
  async function handleDelete() {
    try {
      const response = await fetch(
        `http://localhost:3000/students/${selectedDeleteStudent._id}`,
        { method: "DELETE" },
      );
      const data = await response.json();
      if (response.ok) {
        await fetchStudents();
        toast.success(data.message);
        handleCancelShowDelete();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
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
