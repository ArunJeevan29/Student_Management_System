import { useState } from "react";

function DashboardCard({ title, value }) {
  return (
    <div className="flex flex-col border rounded-lg p-7 shadow hover:shadow-2xl transition justify-center">
      <h2 className="text-xl font-bold">{title}</h2>
      <h1 className="text-2xl mt-2">{value}</h1>
    </div>
  );
}

export default DashboardCard;
