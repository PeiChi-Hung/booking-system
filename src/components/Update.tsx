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
import { transformOrderType } from "@/app/schemas/InputDataSchema"
import axios from "axios"

// const useSomeFunc = <T = SomeDataType>(select?: (data: SomeDataType) => T) =>
//   useQuery(['someQuery', fetcher, { select })

export default function Update() {
  const useOrder = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const response = await axios.get("api/order")
      return response.data
    },
    enabled: false,
  })

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
        <OrderForm data={useOrder.data?.orders} />
      </DialogContent>
    </Dialog>
  )
}
