import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
} from "../ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

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

export default function CancelledMobile() {
  return (
    <div>
      {Cancelledorder.map((order) => (
        <Dialog key={order.order_id}>
          <DialogTrigger className="space-y-1 mb-2 w-full">
            <Card>
              {/* <p className="text-sm font-medium leading-none text-left">
                {order.customer_name}
              </p> */}
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
                <CardTitle className="text-sm font-medium">
                  {order.customer_name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground">
                <p className="text-sm text-muted-foreground w-3/4 inline-block text-left">
                  {order.order_type}
                </p>
                <p className="text-sm text-muted-foreground w-1/4 inline-block">
                  {order.order_date}
                </p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="w-5/6">
            <DialogHeader>
              <DialogTitle>Order detail</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col">
              <p className="text-md">{order.customer_name}</p>
              <p className="text-small text-muted-foreground">
                {order.customer_id}
              </p>
            </div>
            {/* <p>Customer Name: {order.customer_name}</p>
            <p>Customer ID: {order.customer_id}</p> */}
            <div className="space-y-2">
              <p>Order Type: {order.order_type}</p>
              <p>Order Date: {order.order_date}</p>
              <Separator />
              {order.location.map((loc, index) => (
                <div key={index}>
                  <ul className="font-bold">{loc.locationValue}</ul>
                  {loc.expectation.map((exp, inner_index) => (
                    <div key={inner_index}>
                      <ul>Start Date:{exp.start_date}</ul>
                      <ul>End Date: {exp.end_date}</ul>
                      <ul>Start Time: {exp.start_time}</ul>
                      <ul>End Time: {exp.end_time}</ul>
                    </div>
                  ))}
                </div>
              ))}
              <p>Service Fee: {order.service_fee}</p>
              <p>Cancelled Date: {order.cancelled_date}</p>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}
