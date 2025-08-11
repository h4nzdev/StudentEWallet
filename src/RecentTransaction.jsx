import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import React from 'react'

function RecentTransaction() {
  const transactions = [
    {
      name: "Campus Bookstore",
      amount: "-$89.50",
      time: "2 hours ago",
      type: "expense",
      icon: "📚",
      category: "Education",
    },
    {
      name: "Part-time Job",
      amount: "+$245.00",
      time: "1 day ago",
      type: "income",
      icon: "💼",
      category: "Income",
    },
    {
      name: "Coffee Shop",
      amount: "-$4.75",
      time: "2 days ago",
      type: "expense",
      icon: "☕",
      category: "Food",
    },
    {
      name: "Monthly Allowance",
      amount: "+$500.00",
      time: "1 week ago",
      type: "income",
      icon: "💰",
      category: "Allowance",
    },
  ];

  return (
    <div className="mb-20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-800">
          Recent Transactions
        </h3>
        <button className="text-emerald-600 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{transaction.icon}</div>
                <div>
                  <p className="font-medium text-slate-800 text-sm">
                    {transaction.name}
                  </p>
                  <p className="text-slate-500 text-xs">
                    {transaction.time} • {transaction.category}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`font-semibold ${
                    transaction.type === "income"
                      ? "text-emerald-600"
                      : "text-slate-700"
                  }`}
                >
                  {transaction.amount}
                </p>
                {transaction.type === "income" ? (
                  <ArrowDownLeft className="w-4 h-4 text-emerald-500 ml-auto" />
                ) : (
                  <ArrowUpRight className="w-4 h-4 text-slate-500 ml-auto" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentTransaction
