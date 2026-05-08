import { describe, it, expect } from "vitest";
import { ordersToCSV } from "../utils/exportCSV";
import type { Order } from "../types";

const mockOrders: Order[] = [
  {
    id: "#3901",
    customer: "Alice Johnson",
    product: "MacBook Pro",
    amount: 1999.0,
    status: "completed",
    date: "2024-12-15",
  },
  {
    id: "#3900",
    customer: "Bob Martinez",
    product: "Running Shoes",
    amount: 89.9,
    status: "processing",
    date: "2024-12-14",
  },
];

describe("ordersToCSV", () => {
  it("includes a header row", () => {
    const csv = ordersToCSV(mockOrders);
    const firstLine = csv.split("\n")[0];
    expect(firstLine).toContain("ID");
    expect(firstLine).toContain("Customer");
    expect(firstLine).toContain("Amount");
    expect(firstLine).toContain("Status");
  });

  it("includes all order data", () => {
    const csv = ordersToCSV(mockOrders);
    expect(csv).toContain("#3901");
    expect(csv).toContain("Alice Johnson");
    expect(csv).toContain("1999.00");
    expect(csv).toContain("completed");
  });

  it("produces correct number of rows (header + orders)", () => {
    const csv = ordersToCSV(mockOrders);
    const rows = csv.split("\n");
    expect(rows).toHaveLength(mockOrders.length + 1);
  });

  it("formats amounts to 2 decimal places", () => {
    const csv = ordersToCSV(mockOrders);
    expect(csv).toContain("89.90");
  });

  it("returns just a header for empty orders", () => {
    const csv = ordersToCSV([]);
    expect(csv.split("\n")).toHaveLength(1);
  });
});
