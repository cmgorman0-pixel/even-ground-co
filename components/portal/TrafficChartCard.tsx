"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { sampleTrafficSessions } from "./portalContent";

export function TrafficChartCard() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <h2 className="font-display text-lg font-semibold">Site traffic</h2>
      <p className="mt-1 text-sm text-muted">Sessions over the last 30 days.</p>
      <div className="mt-4 h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={[...sampleTrafficSessions]} margin={{ left: -20, right: 10 }}>
            <defs>
              <linearGradient id="sessionsFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#BE5227" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#BE5227" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="var(--border)" vertical={false} />
            <XAxis
              dataKey="date"
              stroke="var(--muted)"
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: "var(--border)" }}
              interval="preserveStartEnd"
            />
            <YAxis
              stroke="var(--muted)"
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              width={40}
            />
            <Tooltip
              contentStyle={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "0.75rem",
                fontSize: "0.875rem",
              }}
              labelStyle={{ color: "var(--foreground)", fontWeight: 600 }}
            />
            <Area
              type="monotone"
              dataKey="sessions"
              stroke="#BE5227"
              strokeWidth={2}
              fill="url(#sessionsFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
