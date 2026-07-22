import DashboardCard from "../components/DashboardCard";

function Dashboard({ students }) {
  const totalStudents = students.length;
  const avgCgpaCalculation = students.reduce((total,student) => { return total + student.cgpa},0) / students.length
  const averageCgpa = students.length === 0 ? "0.0000" : (
    students.reduce((total, student) => total + student.cgpa, 0) / students.length ).toFixed(4)
  const placedStudents = students.filter((student) => student.placed).length;
  const notPlacedStudents = students.filter((student) => !student.placed).length;

  return (
    <div className="flex-1 grid grid-cols-4 gap-6 h-48 mx-10 my-10 text-center w-full">
      <DashboardCard title={"Total Students"} value={totalStudents} />
      <DashboardCard title={"Average CGPA"} value={averageCgpa} />
      <DashboardCard title={"Placed Students"} value={placedStudents} />
      <DashboardCard title={"Not Placed Students"} value={notPlacedStudents} />
    </div>
  );
}

export default Dashboard;
