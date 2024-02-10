import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
} from "../ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const orders = [
  {
    order_id: "ORD003",
    order_date: "2023/05/02",
    customer_id: "0000000002",
    customer_name: "Beta-paid",
    order_type: "Type 2",
    expectations: [
      {
        location: "CBD",
        start_date: "2023/05/04",
        end_date: "2023/11/20",
        start_time: "09:00",
        end_time: "11:00",
      },
      {
        location: "Westall",
        start_date: "2023/05/10",
        end_date: "2023/10/20",
        start_time: "11:00",
        end_time: "13:00",
      },
    ],
    service_fee: 250,
    paid_date: "2023/11/10",
  },
  {
    order_id: "ORD001",
    order_date: "2023/04/01",
    customer_id: "0000000001",
    customer_name: "Alpha",
    order_type: "Type 1",
    expectations: [
      {
        location: "CBD",
        start_date: "2023/05/01",
        end_date: "2023/05/10",
        start_time: "09:00",
        end_time: "13:00",
      },
    ],
    service_fee: 350,
    paid_date: "2023/11/10",
  },
]

export default function PaidMobile() {
  return (
    <div>
      {orders.map((order) => (
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
            <div className="space-y-2">
              <p>Order Type: {order.order_type}</p>
              <p>Order Date: {order.order_date}</p>
              <Separator />
              {order.expectations.map((expectation, index) => (
                <div key={index} className="space-y-2">
                  <p>Location: {expectation.location}</p>
                  <p>Start Date: {expectation.start_date}</p>
                  <p>End Date: {expectation.end_date}</p>
                  <p>Start Time: {expectation.start_time}</p>
                  <p>End Time: {expectation.end_time}</p>
                  <Separator />
                </div>
              ))}
              <p>Service Fee: {order.service_fee}</p>
              <p>Paid Date: {order.paid_date}</p>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}
