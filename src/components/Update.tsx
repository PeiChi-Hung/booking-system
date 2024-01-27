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
import { useState } from "react"

export default function Update({ order_id }: { order_id: string }) {
  const [open, setOpen] = useState(false)
  function onSubmit() {
    setOpen(false)
  }

  const useOrder = useQuery({
    queryKey: ["orders", order_id],
    queryFn: async () => {
      const response = await axios.get(
        // mock api/data from postman
        `https://d634046f-6178-424e-81f4-8bc724bec7e1.mock.pstmn.io/update?order_id=${order_id}`
      )
      return response.data
    },
    // // disable as long as order_id is empty
    enabled: !!order_id,
    // // data transformation
    select: (data) => transformOrderType(data),
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
        <OrderForm
          id={order_id}
          data={useOrder.data?.order}
          onClose={onSubmit}
        />
      </DialogContent>
    </Dialog>
  )
}
