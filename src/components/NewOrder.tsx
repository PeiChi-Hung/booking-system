"use client"

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"
import OrderForm from "./OrderForm"

export default function NewOrder() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Order</Button>
      </DialogTrigger>

      <DialogContent
        className="md:max-w-screen-md overflow-y-scroll md:max-h-screen h-4/5"
        onPointerDownOutside={(e) => e.preventDefault()}
      >
        <DialogTitle>Make a new order</DialogTitle>
        <OrderForm />
      </DialogContent>
    </Dialog>
  )
}
