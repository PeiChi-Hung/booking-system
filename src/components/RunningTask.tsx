import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Pause from "./Pause"
import Cancel from "./Cancel"
import Update from "./Update"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const runningOrders = [
  {
    order_id: "ORD001",
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
      {
        locationValue: "Caufield",
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
  },
  {
    order_id: "ORD002",
    order_date: "2023/04/01",
    customer_id: "0000000123",
    customer_name: "Testing-Update",
    order_type: "Type 1",
    location: [
      {
        locationValue: "South Yarra",
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
  },
]

export default function RunningTask() {
  return (
    <Table>
      {/* <TableCaption>A list of your running orders.</TableCaption>  */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Order Date</TableHead>
          <TableHead>Customer ID</TableHead>
          <TableHead>Customer Name</TableHead>
          <TableHead className="text-right">Order Type</TableHead>
          {/* allow multiple inputs for below inputs */}
          <TableHead className="text-right">Location</TableHead>
          <TableHead className="text-right">Start Date</TableHead>
          <TableHead className="text-right">End Date</TableHead>
          <TableHead className="text-right">Start Time</TableHead>
          <TableHead className="text-right">End Time</TableHead>
          <TableHead className="text-right">Comment</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {runningOrders.map((order) => (
          <TableRow key={order.order_id}>
            <TableCell className="font-medium">{order.order_date}</TableCell>
            <TableCell>{order.customer_id}</TableCell>
            <TableCell>{order.customer_name}</TableCell>
            <TableCell className="text-right">{order.order_type}</TableCell>
            <TableCell>
              {order.location.map((loc, index) => (
                <ul key={index}>{loc.locationValue}</ul>
              ))}
            </TableCell>
            <TableCell>
              {order.location.map((loc) =>
                loc.expectation.map((exp, index) => (
                  <ul key={index}>{exp.start_date}</ul>
                ))
              )}
            </TableCell>
            <TableCell>
              {order.location.map((loc) =>
                loc.expectation.map((exp, index) => (
                  <ul key={index}>{exp.end_date}</ul>
                ))
              )}
            </TableCell>
            <TableCell>
              {order.location.map((loc) =>
                loc.expectation.map((exp, index) => (
                  <ul key={index}>{exp.start_time}</ul>
                ))
              )}
            </TableCell>
            <TableCell>
              {order.location.map((loc) =>
                loc.expectation.map((exp, index) => (
                  <ul key={index}>{exp.end_time}</ul>
                ))
              )}
            </TableCell>

            <TableCell className="text-right">{order.order_type}</TableCell>

            <TableCell className="text-right space-x-1 md:space-y-2">
              <Update order_id={order.order_id} />
              <Pause />
              <Cancel />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
