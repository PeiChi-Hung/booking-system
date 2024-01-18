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
import { covertInputData } from "@/app/schemas/InputDataSchema"
import axios from "axios"

export default function Update() {
  const { data } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const { data } = await axios.get("api/order")
      return data
    },
  })

  data.orders = covertInputData(data?.orders)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Update</Button>
      </DialogTrigger>
      <DialogContent
        className="md:max-w-screen-md overflow-y-scroll md:max-h-screen h-4/5"
        onPointerDownOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Update Form</DialogTitle>
        </DialogHeader>
        <OrderForm data={data?.orders} />
      </DialogContent>
    </Dialog>
  )
}
