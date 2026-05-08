import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import type { CategorySales } from "../types";
import { formatCurrency } from "../utils/formatters";

interface Props {
  data: CategorySales[];
}

export default function SalesByCategoryChart({ data }: Props) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
      <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-4">
        Sales by Category
      </h2>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="category" tick={{ fontSize: 12 }} stroke="#94a3b8" />
          <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
          <Tooltip
            formatter={(value: number, name: string) =>
              name === "revenue" ? formatCurrency(value) : value
            }
            contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0/0.1)" }}
          />
          <Bar dataKey="sales" fill="#818CF8" radius={[4, 4, 0, 0]} name="sales" />
          <Bar dataKey="revenue" fill="#2DD4BF" radius={[4, 4, 0, 0]} name="revenue" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
