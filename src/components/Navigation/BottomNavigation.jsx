import { CreditCard, Home, PieChart, Send, User } from "lucide-react";
import React from "react";

function BottomNavigation() {
  const navItems = [
    { icon: Home, label: "Home", active: true },
    { icon: PieChart, label: "Analytics", active: false },
    { icon: Send, label: "Transfer", active: false },
    { icon: CreditCard, label: "Cards", active: false },
    { icon: User, label: "Profile", active: false },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 py-2 pb-safe">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-all duration-200 ${
              item.active
                ? "text-emerald-600 bg-emerald-50"
                : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
            }`}
          >
            <item.icon
              className={`w-5 h-5 ${item.active ? "text-emerald-600" : ""}`}
            />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default BottomNavigation;
