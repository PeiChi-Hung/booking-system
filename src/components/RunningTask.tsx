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

const orders = [
  {
    order_id: "ORD001",
    order_date: "2023/04/01",
    customer_id: "1",
    customer_name: "Alpha",
    start_dates: ["2023/05/01"],
    start_times: ["09:00"],
    end_dates: ["2023/05/10"],
    end_times: ["13:00"],
    order_type: "Type 1",
    locations: ["Springvale"],
    comment: "dfja;dfo",
  },
  {
    order_id: "ORD002",
    order_date: "2023/05/01",
    customer_id: "2",
    customer_name: "Beta",
    start_dates: ["2023/05/04", "2023/05/19"],
    start_times: ["09:00", "09:00"],
    end_dates: ["2023/11/20", "2024/01/01"],
    end_times: ["11:00", "11:00"],
    order_type: "Type 2",
    locations: ["CBD", "Westall"],
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
    locations: ["Wheelers Hill"],
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
    locations: ["Clayton"],
  },
]

// type OrderFormValues = z.infer<typeof orderFromSchema>

// const { data } = useQuery<{ orders: OrderFormValues[] }>({
//     queryKey: ["orders"],
//     queryFn: () => fetch(`/api/order`).then((res) => res.json()),
//   })

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
          {/* TODO: buttons */}
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.order_id}>
            <TableCell className="font-medium">{order.order_date}</TableCell>
            <TableCell>{order.customer_id}</TableCell>
            <TableCell>{order.customer_name}</TableCell>
            <TableCell className="text-right">{order.order_type}</TableCell>
            <TableCell className="text-right">
              {order.locations.map((location) => (
                <ul key={location}>{location}</ul>
              ))}
            </TableCell>
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
            <TableCell></TableCell>
            <TableCell className="text-right space-x-1 md:space-y-2">
              <Update />
              <Pause />
              <Cancel />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
