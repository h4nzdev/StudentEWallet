import { Bell, User, Wallet } from "lucide-react";
import React from "react";

function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200 px-6 py-4 pb-safe">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-2 rounded-xl shadow-lg">
            <Wallet className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800">E-wallet</h1>
            <p className="text-sm text-slate-500">Good morning, Hanz!</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="bg-slate-100 p-2 rounded-lg hover:bg-slate-200 cursor-pointer transition-colors">
            <Bell className="w-5 h-5 text-slate-600" />
          </div>
          <div className="bg-slate-100 p-2 rounded-lg hover:bg-slate-200 cursor-pointer transition-colors">
            <User className="w-5 h-5 text-slate-600" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
