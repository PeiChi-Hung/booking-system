"use client"
import { Button } from "./ui/button"
import OrderForm from "./OrderForm"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { useQuery } from "@tanstack/react-query"
import { transformOrderType } from "@/app/common/InputDataSchema"
import axios from "axios"

interface fetchData {
  customer_id: string
  customer_name: string
  order_type: string
  location: {
    locationValue: string
    expectation: {
      start_time: string
      start_date: string
      end_time: string
      end_date: string
    }[]
  }[]
  comment: string
}

export default function Update(order_id: { order_id: string }) {
  const useOrder = useQuery({
    queryKey: ["orders", order_id],
    queryFn: async () => {
      const response = await axios.get("api/order")
      return response.data
    },
    // disable as long as order_id is empty
    enabled: !!order_id,
    // data transformation
    select: (data) => transformOrderType(data.orders),
  })

  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* fetch data only when button is clicked */}
        <Button onClick={() => useOrder.refetch()}>Update</Button>
      </DialogTrigger>
      <DialogContent
        className="md:max-w-screen-md overflow-y-scroll md:max-h-screen h-4/5"
        onPointerDownOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Update Form</DialogTitle>
        </DialogHeader>
        <OrderForm data={useOrder.data} />
      </DialogContent>
    </Dialog>
  )
}
