import { useState } from "react";

function DashboardCard({ title, value }) {
  return (
    <div className="flex flex-col border-2 border-black p-7 bg-white text-black hover:bg-black hover:text-white transition justify-center">
      <h2 className="text-xl font-bold">{title}</h2>
      <h1 className="text-2xl mt-2">{value}</h1>
    </div>
  );
}

export default DashboardCard;
