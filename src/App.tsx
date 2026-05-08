import { useState, useEffect } from "react";
import Header from "./components/Header";
import KPICard from "./components/KPICard";
import RevenueChart from "./components/RevenueChart";
import SalesByCategoryChart from "./components/SalesByCategoryChart";
import OrderStatusChart from "./components/OrderStatusChart";
import RecentOrdersTable from "./components/RecentOrdersTable";
import {
  kpiMetrics,
  revenueData,
  categorySales,
  orderStatusData,
  recentOrders,
} from "./data/mockData";

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Header dark={dark} onToggle={() => setDark((d) => !d)} />

        {/* KPI row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {kpiMetrics.map((metric) => (
            <KPICard key={metric.label} metric={metric} />
          ))}
        </div>

        {/* Charts row */}
        <div className="grid lg:grid-cols-3 gap-4 mb-6">
          <div className="lg:col-span-2">
            <RevenueChart data={revenueData} />
          </div>
          <OrderStatusChart data={orderStatusData} />
        </div>

        {/* Category chart + table */}
        <div className="grid lg:grid-cols-2 gap-4 mb-6">
          <SalesByCategoryChart data={categorySales} />
          <div className="flex flex-col gap-4">
            {/* summary stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Avg. Order Value", value: "$38.62" },
                { label: "Return Rate", value: "2.4%" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700"
                >
                  <p className="text-2xl font-bold text-slate-800 dark:text-white">{s.value}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Orders table */}
        <RecentOrdersTable orders={recentOrders} />
      </div>
    </div>
  );
}
