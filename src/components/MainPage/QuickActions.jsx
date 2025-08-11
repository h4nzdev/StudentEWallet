import { ArrowDownLeft, PieChart, Plus, Send } from "lucide-react";
import React from "react";

function QuickActions() {
  const actions = [
    {
      icon: Send,
      label: "Send Money",
      color: "bg-emerald-100 text-emerald-600 border-emerald-200",
    },
    {
      icon: Plus,
      label: "Top Up",
      color: "bg-green-100 text-green-600 border-green-200",
    },
    {
      icon: ArrowDownLeft,
      label: "Request",
      color: "bg-slate-100 text-slate-600 border-slate-200",
    },
    {
      icon: PieChart,
      label: "Invest",
      color: "bg-blue-100 text-blue-600 border-blue-200",
    },
  ];

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">
        Quick Actions
      </h3>
      <div className="grid grid-cols-4 gap-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`${action.color} border p-4 rounded-xl hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center space-y-2`}
          >
            <action.icon className="w-6 h-6" />
            <span className="text-xs font-medium text-center">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;
