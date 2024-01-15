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
import { useState } from "react"
import { orderFormSchema } from "@/app/schemas/OrderFormSchema"
import { z } from "zod"
import { useQuery } from "@tanstack/react-query"

export default function Update() {
  const [open, setOpen] = useState(false)

  const { data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch(`/api/order`).then((res) => {
        // console.log("test")
        return res.json()
      }),
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
