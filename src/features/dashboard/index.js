import { useState } from "react";

function Dashboard() {
  // Sample visitor data
  const visitorData = [
    {
      name: "Karne",
      company: "Avocado Tech",
      idNumber: "AWC793-34",
      email: "prindivrajkundnani@gmail.com",
    },
    {
      name: "Arjuna",
      company: "Designerso",
      idNumber: "DSV878-32",
      email: "prindivrajkundnani@gmail.com",
    },
    {
      name: "Krishna",
      company: "Pearlperfast",
      idNumber: "PXP543-24",
      email: "prindivrajkundnani@gmail.com",
    },
    {
      name: "Krishna",
      company: "Pearlperfast",
      idNumber: "PXP543-24",
      email: "prindivrajkundnani@gmail.com",
    },
    {
      name: "Krishna",
      company: "Pearlperfast",
      idNumber: "PXP543-24",
      email: "prindivrajkundnani@gmail.com",
    },
    {
      name: "Krishna",
      company: "Pearlperfast",
      idNumber: "PXP543-24",
      email: "prindivrajkundnani@gmail.com",
    },
    {
      name: "Krishna",
      company: "Pearlperfast",
      idNumber: "PXP543-24",
      email: "prindivrajkundnani@gmail.com",
    },
    {
      name: "Krishna",
      company: "Pearlperfast",
      idNumber: "PXP543-24",
      email: "prindivrajkundnani@gmail.com",
    },
  ];

  const chartData = [
    20, 30, 25, 35, 30, 40, 35, 45, 40, 50, 45, 55, 50, 60, 55, 65,
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-2">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-600">Dashboard</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-8">
        {/* Today Visitors Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-start gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <span className="text-gray-600 text-sm mt-2">Today Visitors</span>
          </div>
          <div className="flex items-end justify-between">
            <div className="text-5xl font-bold text-gray-800">243</div>
            <div className="flex items-end gap-0.5 h-16 mb-1">
              {chartData.map((height, idx) => (
                <div
                  key={idx}
                  className={`w-2 ${
                    idx === chartData.length - 1 ? "bg-gray-800" : "bg-gray-300"
                  } rounded-sm`}
                  style={{ height: `${(height / 65) * 100}%` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Visitor Table */}
      <div className="bg-white rounded-3xl shadow-sm p-4 w-[80%]">
        {" "}
        {/* Increased padding for the "frame" effect */}
        <div className="">
          {/* Removed w-full and added a specific max-width or let it wrap content */}
          <table className="min-w-full border-separate border-spacing-y-0">
            <thead>
              <tr className="bg-gray-50/80">
                {" "}
                {/* Subtle gray header background */}
                <th className="text-left py-4 px-8 text-sm font-semibold text-red-500 first:rounded-l-2xl">
                  Visitor Name
                </th>
                <th className="text-left py-4 px-8 text-sm font-semibold text-red-500">
                  Company Name
                </th>
                <th className="text-left py-4 px-8 text-sm font-semibold text-red-500">
                  ID Number
                </th>
                <th className="text-left py-4 px-8 text-sm font-semibold text-red-500 last:rounded-r-2xl">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {visitorData.map((visitor, idx) => (
                <tr
                  key={idx}
                  className="group hover:bg-gray-50/50 transition-colors"
                >
                  {/* Using px-8 to create the wide column spacing seen in your image */}
                  <td className="py-5 px-8 text-sm text-gray-800 font-medium">
                    {visitor.name}
                  </td>
                  <td className="py-5 px-8 text-sm text-gray-600">
                    {visitor.company}
                  </td>
                  <td className="py-5 px-8 text-sm text-gray-600">
                    {visitor.idNumber}
                  </td>
                  <td className="py-5 px-8 text-sm text-gray-600">
                    {visitor.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
