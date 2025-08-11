import { CreditCard, Eye } from "lucide-react";
import React from "react";

function BalanceCard() {
  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-2xl shadow-xl p-6 mb-6 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-600/10"></div>
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-slate-300 text-sm mb-1">Total Balance</p>
            <div className="flex items-center space-x-2">
              <h2 className="text-3xl font-bold">$2,847.50</h2>
              <Eye className="w-5 h-5 text-slate-400 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
          <div className="bg-emerald-500 p-3 rounded-xl">
            <CreditCard className="w-6 h-6" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-xs">Card Number</p>
            <p className="text-slate-200 font-mono">**** **** **** 8472</p>
          </div>
          <div>
            <p className="text-slate-400 text-xs">Valid Thru</p>
            <p className="text-slate-200 font-mono">12/28</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceCard;
