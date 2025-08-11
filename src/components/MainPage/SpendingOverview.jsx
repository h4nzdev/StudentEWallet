import React from "react";

function SpendingOverview() {
  const categories = [
    {
      name: "Food & Dining",
      amount: "$234.50",
      percentage: 45,
      color: "bg-emerald-500",
    },
    {
      name: "Education",
      amount: "$156.30",
      percentage: 30,
      color: "bg-green-500",
    },
    {
      name: "Transportation",
      amount: "$78.20",
      percentage: 15,
      color: "bg-slate-400",
    },
    { name: "Others", amount: "$52.00", percentage: 10, color: "bg-slate-300" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">
        This Month's Spending
      </h3>

      <div className="space-y-4">
        {categories.map((category, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-600">
                {category.name}
              </span>
              <span className="text-sm font-semibold text-slate-800">
                {category.amount}
              </span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div
                className={`${category.color} h-2 rounded-full transition-all duration-500`}
                style={{ width: `${category.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpendingOverview;
