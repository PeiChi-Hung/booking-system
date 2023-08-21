"use client"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export default function NewOrder() {
  return (
    // TODO: wrap dialog with form
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Order</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[300px] md:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Make a new order</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="customer_id" className="text-right">
              Customer ID
            </Label>
            <Input id="customer_id" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="customer_name" className="text-right">
              Customer name
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="order_type" className="text-right">
              Order Type
            </Label>
            {/* TODO: replace with a dropdown*/}
            <Input id="order_type" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Location
            </Label>
            {/* TODO: replace with a dropdown*/}
            <Input id="location" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="start_date" className="text-right">
              Start Date
            </Label>
            {/* TODO: replace with a date picker*/}
            <Input id="start_date" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="end_date" className="text-right">
              End Date
            </Label>
            {/* TODO: replace with a date picker*/}
            <Input id="end_date" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="start_time" className="text-right">
              Start Time
            </Label>
            {/* TODO: replace with a time picker*/}
            <Input id="start_time" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="end_time" className="text-right">
              End Time
            </Label>
            {/* TODO: replace with a time picker*/}
            <Input id="end_time" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
