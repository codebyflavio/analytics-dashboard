import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import KPICard from "../components/KPICard";
import type { KPIMetric } from "../types";

const upMetric: KPIMetric = {
  label: "Total Revenue",
  value: "$148,320",
  change: 12.5,
  trend: "up",
  icon: "💰",
};

const downMetric: KPIMetric = {
  label: "Conversion Rate",
  value: "3.6%",
  change: -0.8,
  trend: "down",
  icon: "📈",
};

describe("KPICard", () => {
  it("renders the metric label", () => {
    render(<KPICard metric={upMetric} />);
    expect(screen.getByText("Total Revenue")).toBeInTheDocument();
  });

  it("renders the metric value", () => {
    render(<KPICard metric={upMetric} />);
    expect(screen.getByText("$148,320")).toBeInTheDocument();
  });

  it("renders positive change with + sign", () => {
    render(<KPICard metric={upMetric} />);
    expect(screen.getByText("+12.5%")).toBeInTheDocument();
  });

  it("renders negative change with - sign", () => {
    render(<KPICard metric={downMetric} />);
    expect(screen.getByText("-0.8%")).toBeInTheDocument();
  });

  it("renders the icon", () => {
    render(<KPICard metric={upMetric} />);
    expect(screen.getByText("💰")).toBeInTheDocument();
  });
});
