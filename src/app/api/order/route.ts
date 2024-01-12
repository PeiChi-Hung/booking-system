import { NextResponse } from "next/server"

const orders = {
  order_date: "2023/04/01",
  customer_id: "0000000123",
  customer_name: "Testing-Update",
  order_type: "Type",
  location: [
    {
      locationValue: "CBD",
      expectation: [
        {
          start_time: "10:00:00",
          start_date: new Date("January 13th, 2024"),
          end_time: "15:00:00",
          end_date: new Date("January 15th, 2024"),
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
