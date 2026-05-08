import type { Order } from "../types";

export function ordersToCSV(orders: Order[]): string {
  const header = ["ID", "Customer", "Product", "Amount", "Status", "Date"];
  const rows = orders.map((o) => [
    o.id,
    o.customer,
    o.product,
    o.amount.toFixed(2),
    o.status,
    o.date,
  ]);
  return [header, ...rows].map((row) => row.join(",")).join("\n");
}

export function downloadCSV(content: string, filename: string): void {
  const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
