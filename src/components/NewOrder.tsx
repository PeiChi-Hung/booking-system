"use client"

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog"

import { Button } from "./ui/button"

import OrderForm from "./OrderForm"

export default function NewOrder() {
  return (
    // TODO: wrap dialog with form
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Order</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Make a new order</DialogTitle>
        <OrderForm />
      </DialogContent>
    </Dialog>
  )
}
