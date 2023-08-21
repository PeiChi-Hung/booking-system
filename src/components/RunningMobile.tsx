import { Separator } from "@/components/ui/separator"

const orders = [
  {
    order_id: "ORD003",
    order_date: "2023/05/02",
    customer_id: "2",
    customer_name: "Beta",
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
  },
  {
    order_id: "ORD001",
    order_date: "2023/04/01",
    customer_id: "1",
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
  },
]

export default function RunningMobile() {
  return (
    <div>
      {orders.map((order) => (
        <div className="space-y-1 mb-4" key={order.order_id}>
          <p className="text-sm font-medium leading-none">
            {order.customer_name}
          </p>
          <div>
            <p className="text-sm text-muted-foreground w-3/4 inline-block">
              {order.order_type}
            </p>
            <p className="text-sm text-muted-foreground w-1/4 inline-block">
              {order.order_date}
            </p>
          </div>
          <Separator />
        </div>
      ))}
    </div>
  )
}
