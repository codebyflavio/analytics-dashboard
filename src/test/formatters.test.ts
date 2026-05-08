import { describe, it, expect } from "vitest";
import {
  formatCurrency,
  formatNumber,
  formatPercentage,
  formatDate,
} from "../utils/formatters";

describe("formatCurrency", () => {
  it("formats positive values with $ sign", () => {
    expect(formatCurrency(1999)).toBe("$1,999.00");
  });

  it("formats decimal values correctly", () => {
    expect(formatCurrency(89.9)).toBe("$89.90");
  });

  it("formats zero", () => {
    expect(formatCurrency(0)).toBe("$0.00");
  });

  it("formats large values with thousand separators", () => {
    expect(formatCurrency(148320)).toBe("$148,320.00");
  });
});

describe("formatNumber", () => {
  it("adds thousand separators", () => {
    expect(formatNumber(3842)).toBe("3,842");
  });

  it("handles small numbers", () => {
    expect(formatNumber(42)).toBe("42");
  });
});

describe("formatPercentage", () => {
  it("adds + sign for positive values", () => {
    expect(formatPercentage(12.5)).toBe("+12.5%");
  });

  it("keeps - sign for negative values", () => {
    expect(formatPercentage(-0.8)).toBe("-0.8%");
  });

  it("formats zero without sign", () => {
    expect(formatPercentage(0)).toBe("0.0%");
  });

  it("respects custom decimal places", () => {
    expect(formatPercentage(5.333, 2)).toBe("+5.33%");
  });
});

describe("formatDate", () => {
  it("formats ISO date to readable string", () => {
    const result = formatDate("2024-12-15");
    expect(result).toContain("Dec");
    expect(result).toContain("15");
    expect(result).toContain("2024");
  });

  it("handles different months", () => {
    expect(formatDate("2024-01-01")).toContain("Jan");
    expect(formatDate("2024-06-30")).toContain("Jun");
  });
});
