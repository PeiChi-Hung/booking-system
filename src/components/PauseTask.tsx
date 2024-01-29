import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"
import Resume from "./Resume"
import Cancel from "./Cancel"
import Update from "./Update"

const pauseOrders = [
  {
    order_id: "ORD003",
    order_date: "2023/03/01",
    customer_id: "0000000123",
    customer_name: "Mock Pause",
    order_type: "Type 1",
    location: [
      {
        locationValue: "Glen Waverley",
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
    order_id: "ORD004",
    order_date: "2023/02/20",
    customer_id: "0000000999",
    customer_name: "Mock Pause 2",
    order_type: "Type 3",
    location: [
      {
        locationValue: "CBD",
        expectation: [
          {
            start_time: "10:00:00",
            start_date: "2024-03-22",
            end_time: "15:00:00",
            end_date: "2024-04-24",
          },
        ],
      },
    ],
  },
]

export default function PauseTask() {
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
        {pauseOrders.map((order) => (
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
            <TableCell className="text-right">{order.order_type}</TableCell>
            <TableCell className="text-right space-x-1 md:space-y-2">
              <Update order_id={order.order_id} />
              <Resume />
              <Cancel />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
