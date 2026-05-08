import type { Order, OrderStatus } from "../types";
import { formatCurrency, formatDate } from "../utils/formatters";
import { ordersToCSV, downloadCSV } from "../utils/exportCSV";

interface Props {
  orders: Order[];
}

const STATUS_STYLES: Record<OrderStatus, string> = {
  completed:  "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  processing: "bg-indigo-100  text-indigo-700  dark:bg-indigo-900/30  dark:text-indigo-400",
  pending:    "bg-amber-100   text-amber-700   dark:bg-amber-900/30   dark:text-amber-400",
  cancelled:  "bg-red-100     text-red-600     dark:bg-red-900/30     dark:text-red-400",
};

export default function RecentOrdersTable({ orders }: Props) {
  function handleExport() {
    downloadCSV(ordersToCSV(orders), "orders.csv");
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          Recent Orders
        </h2>
        <button
          onClick={handleExport}
          className="text-xs px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-accent hover:text-accent transition-colors"
        >
          Export CSV
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 dark:border-slate-700">
              {["Order", "Customer", "Product", "Amount", "Status", "Date"].map((h) => (
                <th
                  key={h}
                  className="text-left py-2 px-2 text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-slate-50 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors"
              >
                <td className="py-2.5 px-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                  {order.id}
                </td>
                <td className="py-2.5 px-2 font-medium text-slate-700 dark:text-slate-200">
                  {order.customer}
                </td>
                <td className="py-2.5 px-2 text-slate-600 dark:text-slate-300">
                  {order.product}
                </td>
                <td className="py-2.5 px-2 font-semibold text-slate-700 dark:text-slate-200">
                  {formatCurrency(order.amount)}
                </td>
                <td className="py-2.5 px-2">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium capitalize ${STATUS_STYLES[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-2.5 px-2 text-slate-500 dark:text-slate-400 text-xs">
                  {formatDate(order.date)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
