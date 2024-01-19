import { NextResponse } from "next/server"

let orders = {
  order_id: "001",
  order_date: "2023/04/01",
  customer_id: "0000000123",
  customer_name: "Testing-Update",
  order_type: "Type 1",
  location: [
    {
      locationValue: "CBD",
      expectation: [
        {
          start_time: "10:00:00",
          start_date: "2024-01-20",
          end_time: "15:00:00",
          end_date: "2024-01-25",
        },
      ],
    },
  ],
  comment: "Comment for testing",
  status: "running",
}
export async function GET() {
  return NextResponse.json({ orders })
}
