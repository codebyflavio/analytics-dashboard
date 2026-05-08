export interface KPIMetric {
  label: string;
  value: string;
  change: number;
  trend: "up" | "down";
  icon: string;
}

export interface RevenuePoint {
  month: string;
  revenue: number;
  target: number;
}

export interface CategorySales {
  category: string;
  sales: number;
  revenue: number;
}

export interface OrderStatusEntry {
  status: string;
  count: number;
  fill: string;
}

export type OrderStatus = "completed" | "pending" | "cancelled" | "processing";

export interface Order {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: OrderStatus;
  date: string;
}
