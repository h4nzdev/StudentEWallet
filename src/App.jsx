import { CreditCard, Home, PieChart, Send, User, Bell, Eye, EyeOff, Plus, ArrowUpRight, ArrowDownLeft, Wallet } from 'lucide-react';

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

function QuickActions() {
  const actions = [
    { icon: Send, label: 'Send Money', color: 'bg-emerald-100 text-emerald-600 border-emerald-200' },
    { icon: Plus, label: 'Top Up', color: 'bg-green-100 text-green-600 border-green-200' },
    { icon: ArrowDownLeft, label: 'Request', color: 'bg-slate-100 text-slate-600 border-slate-200' },
    { icon: PieChart, label: 'Invest', color: 'bg-blue-100 text-blue-600 border-blue-200' }
  ];

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-4 gap-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`${action.color} border p-4 rounded-xl hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center space-y-2`}
          >
            <action.icon className="w-6 h-6" />
            <span className="text-xs font-medium text-center">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function RecentTransactions() {
  const transactions = [
    { 
      name: 'Campus Bookstore', 
      amount: '-$89.50', 
      time: '2 hours ago', 
      type: 'expense',
      icon: '📚',
      category: 'Education'
    },
    { 
      name: 'Part-time Job', 
      amount: '+$245.00', 
      time: '1 day ago', 
      type: 'income',
      icon: '💼',
      category: 'Income'
    },
    { 
      name: 'Coffee Shop', 
      amount: '-$4.75', 
      time: '2 days ago', 
      type: 'expense',
      icon: '☕',
      category: 'Food'
    },
    { 
      name: 'Monthly Allowance', 
      amount: '+$500.00', 
      time: '1 week ago', 
      type: 'income',
      icon: '💰',
      category: 'Allowance'
    }
  ];

  return (
    <div className="mb-20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-800">Recent Transactions</h3>
        <button className="text-emerald-600 text-sm font-medium">View All</button>
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
                  <p className="font-medium text-slate-800 text-sm">{transaction.name}</p>
                  <p className="text-slate-500 text-xs">{transaction.time} • {transaction.category}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-semibold ${
                  transaction.type === 'income' ? 'text-emerald-600' : 'text-slate-700'
                }`}>
                  {transaction.amount}
                </p>
                {transaction.type === 'income' ? 
                  <ArrowDownLeft className="w-4 h-4 text-emerald-500 ml-auto" /> :
                  <ArrowUpRight className="w-4 h-4 text-slate-500 ml-auto" />
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpendingOverview() {
  const categories = [
    { name: 'Food & Dining', amount: '$234.50', percentage: 45, color: 'bg-emerald-500' },
    { name: 'Education', amount: '$156.30', percentage: 30, color: 'bg-green-500' },
    { name: 'Transportation', amount: '$78.20', percentage: 15, color: 'bg-slate-400' },
    { name: 'Others', amount: '$52.00', percentage: 10, color: 'bg-slate-300' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">This Month's Spending</h3>
      
      <div className="space-y-4">
        {categories.map((category, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-600">{category.name}</span>
              <span className="text-sm font-semibold text-slate-800">{category.amount}</span>
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

function BottomNavigation() {
  const navItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: PieChart, label: 'Analytics', active: false },
    { icon: Send, label: 'Transfer', active: false },
    { icon: CreditCard, label: 'Cards', active: false },
    { icon: User, label: 'Profile', active: false }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 py-2 pb-safe">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-all duration-200 ${
              item.active 
                ? 'text-emerald-600 bg-emerald-50' 
                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
            }`}
          >
            <item.icon className={`w-5 h-5 ${item.active ? 'text-emerald-600' : ''}`} />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-green-50">
      <Header />
      
      <main className="px-6 py-4 max-w-md mx-auto">
        <BalanceCard />
        <QuickActions />
        <SpendingOverview />
        <RecentTransactions />
      </main>
      
      <BottomNavigation />
    </div>
  );
}