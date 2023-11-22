"use client"

import {
  Bar,
  BarChart,
  Label,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Options from "@/components/VisOptions"

const data = [
  {
    name: "Jan",
    paid: Math.floor(Math.random() * 5000) + 1000,
    unpaid: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    paid: Math.floor(Math.random() * 5000) + 1000,
    unpaid: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    paid: Math.floor(Math.random() * 5000) + 1000,
    unpaid: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    paid: Math.floor(Math.random() * 5000) + 1000,
    unpaid: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    paid: Math.floor(Math.random() * 5000) + 1000,
    unpaid: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    paid: Math.floor(Math.random() * 5000) + 1000,
    unpaid: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    paid: Math.floor(Math.random() * 5000) + 1000,
    unpaid: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    paid: Math.floor(Math.random() * 5000) + 1000,
    unpaid: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    paid: Math.floor(Math.random() * 5000) + 1000,
    unpaid: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    paid: Math.floor(Math.random() * 5000) + 1000,
    unpaid: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    paid: Math.floor(Math.random() * 5000) + 1000,
    unpaid: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    paid: Math.floor(Math.random() * 5000) + 1000,
    unpaid: Math.floor(Math.random() * 5000) + 1000,
  },
]

export function CompletedBarChart() {
  return (
    <div>
      <Options />
      <Card className="mt-2">
        <CardHeader>
          <CardTitle>
            Completed orders in the past {data.length} months
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer aspect={2.6}>
            <BarChart data={data}>
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
              />
              {/* <Tooltip /> */}
              <Legend />
              <Bar dataKey="paid" fill="#8884d8" stackId="a" />
              <Bar dataKey="unpaid" fill="#82ca9d" stackId="a">
                <LabelList position="top" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
