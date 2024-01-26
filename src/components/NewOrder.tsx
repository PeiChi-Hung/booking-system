"use client"

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"
import OrderForm from "./OrderForm"
import { useState } from "react"

export default function NewOrder() {
  const [open, setOpen] = useState(false)
  function onSubmit() {
    setOpen(false)
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>New Order</Button>
      </DialogTrigger>

      <DialogContent
        className="md:max-w-screen-md overflow-y-scroll md:max-h-screen h-4/5"
        onPointerDownOutside={(e) => e.preventDefault()}
      >
        <DialogTitle>Make a new order</DialogTitle>
        <OrderForm onClose={onSubmit} />
      </DialogContent>
    </Dialog>
  )
}
