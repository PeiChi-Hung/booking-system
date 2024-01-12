"use client"

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"
import OrderForm from "./OrderForm"
import { useState } from "react"
import * as z from "zod"
import { orderFormSchema } from "@/app/schemas/OrderFormSchema"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

export default function NewOrder() {
  // make Dialog a controlled element
  const [open, setOpen] = useState(false)

  function onSubmit(values: z.infer<typeof orderFormSchema>) {
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
        <QueryClientProvider client={queryClient}>
          <OrderForm onSubmit={onSubmit} />
        </QueryClientProvider>
      </DialogContent>
    </Dialog>
  )
}
