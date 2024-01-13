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

export default function Update() {
  const [open, setOpen] = useState(false)

  function onUpdate(values: z.infer<typeof orderFormSchema>) {
    // replace it with form update API
    console.log(values)
    setOpen(false)
  }

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
        <OrderForm onSubmit={onUpdate} />
      </DialogContent>
    </Dialog>
  )
}
