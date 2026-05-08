# Analytics Dashboard

Interactive data analytics dashboard built with React, TypeScript, and Recharts.

Displays sales metrics, revenue trends, order status and a filterable orders table with CSV export.

---

## Features

- **KPI cards** — Total Revenue, Orders, Customers and Conversion Rate with trend indicators
- **Revenue chart** — monthly revenue vs. target line chart (Recharts)
- **Sales by Category** — grouped bar chart per product category
- **Order Status** — donut chart with status breakdown
- **Orders table** — recent orders with status badges and CSV export
- **Dark / Light theme** — toggle persisted via React state
- **Vitest** — unit tests for utilities, data and components
- **GitHub Actions CI** — type check + tests on every push

---

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Recharts
- Vitest + React Testing Library

---

## Getting Started

```bash
git clone https://github.com/codebyflavio/analytics-dashboard.git
cd analytics-dashboard
npm install
npm run dev
```

Open **http://localhost:5173**

---

## Running Tests

```bash
npm test           # run once
npm run test:watch # watch mode
npm run coverage   # with coverage report
```

---

## Author

**Flavio Rodrigues**  
[github.com/codebyflavio](https://github.com/codebyflavio) · flaviorodriguestrb@gmail.com
