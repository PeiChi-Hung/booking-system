"use client"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

import { Button } from "./ui/button"

import OrderForm from "./OrderForm"

export default function NewOrder() {
  return (
    // TODO: wrap dialog with form
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
        {/* <DialogClose asChild>
          <Button type="submit">Submit</Button>
        </DialogClose> */}
      </DialogContent>
    </Dialog>
  )
}
