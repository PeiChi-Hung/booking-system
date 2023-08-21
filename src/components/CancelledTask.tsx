import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"

const orders = [
  {
    order_id: "ORD001",
    order_date: "2023/04/01",
    customer_id: "1",
    customer_name: "Alpha",
    start_dates: ["2023/05/01", "2023/05/02"],
    start_times: ["09:00", "09:00"],
    end_dates: ["2023/05/10", "2023/05/11"],
    end_times: ["13:00", "14:00"],
    order_type: "Type 1",
    location: "Springvale",
    service_fee: "$250",
    cancel_date: "2023/05/10",
  },
  {
    order_id: "ORD002",
    order_date: "2023/05/01",
    customer_id: "2",
    customer_name: "Beta",
    start_dates: ["2023/05/04"],
    start_times: ["09:00"],
    end_dates: ["2023/11/20"],
    end_times: ["11:00"],
    order_type: "Type 2",
    location: "CBD",
    service_fee: "$350",
    cancel_date: "2023/10/10",
  },
  {
    order_id: "ORD003",
    order_date: "2023/05/04",
    customer_id: "3",
    customer_name: "Gamma",
    start_dates: ["2023/07/29"],
    start_times: ["09:00"],
    end_dates: ["2023/09/29"],
    end_times: ["23:00"],
    order_type: "Type 3",
    location: "Wheelers Hill",
    service_fee: "$240",
    cancel_date: "2023/11/10",
  },
  {
    order_id: "ORD004",
    order_date: "2023/05/11",
    customer_id: "4",
    customer_name: "Lambda",
    start_dates: ["2023/07/04"],
    start_times: ["07:00"],
    end_dates: ["2023/09/04"],
    end_times: ["09:00"],
    order_type: "Type 4",
    location: "Clayton",
    service_fee: "$200",
    cancel_date: "2024/01/10",
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
          <TableHead className="text-right">Service Fee</TableHead>
          <TableHead className="text-right">Cancel Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.order_id}>
            <TableCell className="font-medium">{order.order_date}</TableCell>
            <TableCell>{order.customer_id}</TableCell>
            <TableCell>{order.customer_name}</TableCell>
            <TableCell className="text-right">{order.order_type}</TableCell>
            <TableCell className="text-right">{order.location}</TableCell>
            <TableCell className="text-right">
              {order.start_dates.map((date, index) => (
                <ul key={index}>{date}</ul>
              ))}
            </TableCell>
            <TableCell className="text-right">
              {order.end_dates.map((date, index) => (
                <ul key={index}>{date}</ul>
              ))}
            </TableCell>
            <TableCell className="text-right">
              {order.start_times.map((time, index) => (
                <ul key={index}>{time}</ul>
              ))}
            </TableCell>
            <TableCell className="text-right">
              {order.end_times.map((time, index) => (
                <ul key={index}>{time}</ul>
              ))}
            </TableCell>
            <TableCell className="text-right">{order.service_fee}</TableCell>
            <TableCell className="text-right">{order.cancel_date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
