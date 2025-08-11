import BalanceCard from "./components/MainPage/BalanceCard";
import Header from "./components/MainPage/Header";
import QuickActions from "./components/MainPage/QuickActions";
import SpendingOverview from "./components/MainPage/SpendingOverview";
import BottomNavigation from "./components/Navigation/BottomNavigation";
import RecentTransaction from "./RecentTransaction";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-green-50">
      <Header />

      <main className="px-6 py-4 max-w-md mx-auto">
        <BalanceCard />
        <QuickActions />
        <SpendingOverview />
        <RecentTransaction />
      </main>

      <BottomNavigation />
    </div>
  );
}
