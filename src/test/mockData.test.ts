import { describe, it, expect } from "vitest";
import {
  kpiMetrics,
  revenueData,
  categorySales,
  orderStatusData,
  recentOrders,
} from "../data/mockData";

describe("kpiMetrics", () => {
  it("has 4 metrics", () => {
    expect(kpiMetrics).toHaveLength(4);
  });

  it("each metric has required fields", () => {
    for (const m of kpiMetrics) {
      expect(m).toHaveProperty("label");
      expect(m).toHaveProperty("value");
      expect(m).toHaveProperty("change");
      expect(m.trend === "up" || m.trend === "down").toBe(true);
    }
  });
});

describe("revenueData", () => {
  it("has 12 monthly data points", () => {
    expect(revenueData).toHaveLength(12);
  });

  it("all points have positive revenue and target", () => {
    for (const p of revenueData) {
      expect(p.revenue).toBeGreaterThan(0);
      expect(p.target).toBeGreaterThan(0);
    }
  });
});

describe("categorySales", () => {
  it("has at least 3 categories", () => {
    expect(categorySales.length).toBeGreaterThanOrEqual(3);
  });

  it("all categories have positive sales and revenue", () => {
    for (const c of categorySales) {
      expect(c.sales).toBeGreaterThan(0);
      expect(c.revenue).toBeGreaterThan(0);
    }
  });
});

describe("orderStatusData", () => {
  it("covers all 4 statuses", () => {
    const statuses = orderStatusData.map((d) => d.status);
    expect(statuses).toContain("Completed");
    expect(statuses).toContain("Pending");
    expect(statuses).toContain("Cancelled");
    expect(statuses).toContain("Processing");
  });
});

describe("recentOrders", () => {
  it("has at least 5 orders", () => {
    expect(recentOrders.length).toBeGreaterThanOrEqual(5);
  });

  it("all orders have valid status", () => {
    const valid = ["completed", "pending", "cancelled", "processing"];
    for (const o of recentOrders) {
      expect(valid).toContain(o.status);
    }
  });

  it("all amounts are positive", () => {
    for (const o of recentOrders) {
      expect(o.amount).toBeGreaterThan(0);
    }
  });
});
