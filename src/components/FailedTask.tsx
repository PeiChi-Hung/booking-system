import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Update from "./Update"
import Resume from "./Resume"
import Cancel from "./Cancel"

const failedOrders = [
  {
    order_id: "ORD005",
    order_date: "2023/05/20",
    customer_id: "0000001000",
    customer_name: "Mock Failed",
    order_type: "Type 3",
    location: [
      {
        locationValue: "CBD",
        expectation: [
          {
            start_time: "09:00:00",
            start_date: "2024-03-22",
            end_time: "15:24:00",
            end_date: "2024-04-24",
          },
        ],
      },
    ],
  },
  {
    order_id: "ORD006",
    order_date: "2024/01/01",
    customer_id: "0000001001",
    customer_name: "Mock Failed",
    order_type: "Type 4",
    location: [
      {
        locationValue: "Clayton",
        expectation: [
          {
            start_time: "11:00:00",
            start_date: "2024-03-22",
            end_time: "15:24:00",
            end_date: "2024-04-24",
          },
        ],
      },
    ],
  },
]

export default function FailedTask() {
  return (
    <Table>
      {/* <TableCaption>A list of your running orders.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Order Date</TableHead>
          <TableHead>Customer ID</TableHead>
          <TableHead className="w-[100px]">Customer Name</TableHead>
          <TableHead className="text-right">Order Type</TableHead>
          {/* allow multiple inputs for below inputs */}
          <TableHead className="text-right">Location</TableHead>
          <TableHead className="w-[100px]">Start Date</TableHead>
          <TableHead className="w-[100px]">End Date</TableHead>
          <TableHead className="w-[75px]">Start Time</TableHead>
          <TableHead className="w-[75px]">End Time</TableHead>
          <TableHead className="text-right">Comment</TableHead>
          {/* TODO: buttons */}
          <TableHead className="text-right">Action</TableHead>
          <TableHead className="text-right">Failed Reason</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {failedOrders.map((order) => (
          <TableRow key={order.order_id}>
            <TableCell className="font-medium">{order.order_date}</TableCell>
            <TableCell>{order.customer_id}</TableCell>
            <TableCell>{order.customer_name}</TableCell>
            <TableCell className="text-right">{order.order_type}</TableCell>
            <TableCell className="text-right">
              {order.location.map((loc, index) => (
                <ul key={index}>{loc.locationValue}</ul>
              ))}
            </TableCell>
            <TableCell className="text-right">
              {order.location.map((loc) =>
                loc.expectation.map((exp, index) => (
                  <ul key={index}>{exp.start_date}</ul>
                ))
              )}
            </TableCell>
            <TableCell className="text-right">
              {order.location.map((loc) =>
                loc.expectation.map((exp, index) => (
                  <ul key={index}>{exp.end_date}</ul>
                ))
              )}
            </TableCell>
            <TableCell className="text-right">
              {order.location.map((loc) =>
                loc.expectation.map((exp, index) => (
                  <ul key={index}>{exp.start_time}</ul>
                ))
              )}
            </TableCell>
            <TableCell className="text-right">
              {order.location.map((loc) =>
                loc.expectation.map((exp, index) => (
                  <ul key={index}>{exp.end_time}</ul>
                ))
              )}
            </TableCell>
            <TableCell></TableCell>
            <TableCell className="text-right space-x-1 md:space-y-2">
              <Update order_id={order.order_id} />
              <Resume />
              <Cancel />
            </TableCell>
            <TableCell className="text-right"></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
