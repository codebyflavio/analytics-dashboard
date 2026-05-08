import type {
  KPIMetric,
  RevenuePoint,
  CategorySales,
  OrderStatusEntry,
  Order,
} from "../types";

export const kpiMetrics: KPIMetric[] = [
  { label: "Total Revenue", value: "$148,320", change: 12.5, trend: "up", icon: "💰" },
  { label: "Total Orders", value: "3,842", change: 8.1, trend: "up", icon: "📦" },
  { label: "Active Customers", value: "1,275", change: 5.3, trend: "up", icon: "👥" },
  { label: "Conversion Rate", value: "3.6%", change: -0.8, trend: "down", icon: "📈" },
];

export const revenueData: RevenuePoint[] = [
  { month: "Jan", revenue: 9200, target: 9000 },
  { month: "Feb", revenue: 10800, target: 9500 },
  { month: "Mar", revenue: 11400, target: 10000 },
  { month: "Apr", revenue: 10200, target: 10500 },
  { month: "May", revenue: 12600, target: 11000 },
  { month: "Jun", revenue: 13800, target: 12000 },
  { month: "Jul", revenue: 14200, target: 12500 },
  { month: "Aug", revenue: 13100, target: 13000 },
  { month: "Sep", revenue: 15300, target: 13500 },
  { month: "Oct", revenue: 14700, target: 14000 },
  { month: "Nov", revenue: 16900, target: 15000 },
  { month: "Dec", revenue: 16120, target: 16000 },
];

export const categorySales: CategorySales[] = [
  { category: "Electronics", sales: 1240, revenue: 62000 },
  { category: "Clothing",    sales: 980,  revenue: 29400 },
  { category: "Books",       sales: 760,  revenue: 11400 },
  { category: "Sports",      sales: 540,  revenue: 27000 },
  { category: "Food",        sales: 322,  revenue: 9660  },
];

export const orderStatusData: OrderStatusEntry[] = [
  { status: "Completed",  count: 2480, fill: "#2DD4BF" },
  { status: "Processing", count: 640,  fill: "#818CF8" },
  { status: "Pending",    count: 480,  fill: "#FBBF24" },
  { status: "Cancelled",  count: 242,  fill: "#F87171" },
];

export const recentOrders: Order[] = [
  { id: "#3901", customer: "Alice Johnson",  product: "MacBook Pro 14\"",  amount: 1999.00, status: "completed",  date: "2024-12-15" },
  { id: "#3900", customer: "Bob Martinez",   product: "Running Shoes",     amount: 89.90,   status: "processing", date: "2024-12-15" },
  { id: "#3899", customer: "Carol White",    product: "TypeScript Handbook", amount: 39.90, status: "completed",  date: "2024-12-14" },
  { id: "#3898", customer: "David Lee",      product: "Wireless Headphones", amount: 249.00, status: "pending",   date: "2024-12-14" },
  { id: "#3897", customer: "Emma Davis",     product: "Yoga Mat Pro",      amount: 59.90,   status: "cancelled",  date: "2024-12-13" },
  { id: "#3896", customer: "Frank Wilson",   product: "4K Monitor 27\"",   amount: 449.00,  status: "completed",  date: "2024-12-13" },
  { id: "#3895", customer: "Grace Kim",      product: "Coffee Capsules",   amount: 29.90,   status: "processing", date: "2024-12-12" },
  { id: "#3894", customer: "Henry Brown",    product: "Mechanical Keyboard", amount: 129.00, status: "completed", date: "2024-12-12" },
];
