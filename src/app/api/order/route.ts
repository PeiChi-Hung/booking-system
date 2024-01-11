import { NextResponse } from "next/server"

const orders = [
  {
    order_date: "2023/04/01",
    customer_id: "1234567890",
    customer_name: "testing",
    order_type: "Type 1",
    location: [
      {
        locationValue: "CBD",
        expectation: [
          { start_time: [""], start_date: [""], end_time: [], end_date: [] },
        ],
      },
    ],
    comment: "",
    status: "running",
  },
]

export async function GET() {
  return NextResponse.json({ orders })
}
