import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"

const Cancelledorder = [
  {
    order_id: "ORD009",
    order_date: "2022/03/01",
    customer_id: "0000000123",
    customer_name: "Mock Cancelled",
    order_type: "Type 1",
    location: [
      {
        locationValue: "Glen Waverley",
        expectation: [
          {
            start_time: "10:00:00",
            start_date: "2024-01-20",
            end_time: "15:00:00",
            end_date: "2022-03-22",
          },
        ],
      },
    ],
    service_fee: "$250",
    comment: "Comment for testing",
    cancelled_date: "2022/03/02",
  },
  {
    order_id: "ORD010",
    order_date: "2023/10/20",
    customer_id: "0000000999",
    customer_name: "Mock Cancelled 2",
    order_type: "Type 3",
    location: [
      {
        locationValue: "CBD",
        expectation: [
          {
            start_time: "10:00:00",
            start_date: "2024-03-22",
            end_time: "15:00:00",
            end_date: "2023-11-12",
          },
        ],
      },
    ],
    service_fee: "$200",
    cancelled_date: "2023/10/22",
  },
]

export default function CancelledTask() {
  return (
    <Table>
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
          <TableHead className="text-right">Service Fee</TableHead>
          <TableHead className="text-right">Cancel Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Cancelledorder.map((order) => (
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
            <TableCell className="text-right">{order.service_fee}</TableCell>
            <TableCell className="text-right">{order.cancelled_date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
