import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
} from "../ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import Update from "../Update"
import Resume from "../Resume"
import Cancel from "../Cancel"

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

export default function PaidMobile() {
  return (
    <div>
      {failedOrders.map((order) => (
        <Dialog key={order.order_id}>
          <DialogTrigger className="space-y-1 mb-2 w-full">
            <Card className="h-2/3">
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
              {order.location.map((loc) => (
                <div>
                  <ul className="font-bold">{loc.locationValue}</ul>
                  {loc.expectation.map((exp) => (
                    <div>
                      <ul>Start Date:{exp.start_date}</ul>
                      <ul>End Date: {exp.end_date}</ul>
                      <ul>Start Time: {exp.start_time}</ul>
                      <ul>End Time: {exp.end_time}</ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <Separator />
            <div className="grid grid-cols-3 space-x-1">
              <Update order_id={order.order_id} />
              <Resume />
              <Cancel />
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}
