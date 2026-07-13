import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  const totalStudents = 0;
  const averageCgpa = 0;
  const placedStudents = 0;
  const notPlacedStudents = 0;

  return (
    <div className="flex-1 grid grid-cols-4 gap-6 h-48 mx-10 my-10 text-center w-full">
      <DashboardCard title={"Total Students"} value={totalStudents} />
      <DashboardCard title={"Average Students"} value={averageCgpa} />
      <DashboardCard title={"PLaced Students"} value={placedStudents} />
      <DashboardCard title={"Not Students"} value={notPlacedStudents} />
    </div>
  );
}

export default Dashboard;
