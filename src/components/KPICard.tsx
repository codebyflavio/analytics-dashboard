import type { KPIMetric } from "../types";
import { formatPercentage } from "../utils/formatters";

interface Props {
  metric: KPIMetric;
}

export default function KPICard({ metric }: Props) {
  const isUp = metric.trend === "up";
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="flex items-center justify-between mb-3">
        <span className="text-2xl">{metric.icon}</span>
        <span
          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
            isUp
              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
              : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
          }`}
        >
          {formatPercentage(metric.change)}
        </span>
      </div>
      <p className="text-2xl font-bold text-slate-800 dark:text-white">{metric.value}</p>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{metric.label}</p>
    </div>
  );
}
