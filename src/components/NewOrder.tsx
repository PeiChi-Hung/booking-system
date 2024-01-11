"use client"

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"
import OrderForm from "./OrderForm"
import { useState } from "react"
import * as z from "zod"
import { orderFromSchema } from "@/app/schemas/OrderFormSchema"

export default function NewOrder() {
  // make Dialog a controlled element
  const [open, setOpen] = useState(false)

  function onSubmit(values: z.infer<typeof orderFromSchema>) {
    // replace it with form submission API
    console.log(values)
    setOpen(false)
  }

  return (
    // TODO: wrap dialog with form
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>New Order</Button>
      </DialogTrigger>

      <DialogContent
        className="md:max-w-screen-md overflow-y-scroll md:max-h-screen h-4/5"
        onPointerDownOutside={(e) => e.preventDefault()}
      >
        <DialogTitle>Make a new order</DialogTitle>
        <OrderForm onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  )
}
