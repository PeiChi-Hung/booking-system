import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Control, useFieldArray, useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover"
import { format } from "date-fns"
import { Calendar } from "./ui/calendar"
import { CalendarIcon } from "@radix-ui/react-icons"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Separator } from "./ui/separator"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

import { orderFromSchema } from "@/app/schemas/OrderFormSchema"
// mock data for location
const locationOptions = [
  "CBD",
  "Clayton",
  "Caufield",
  "South Yarra",
  "Glen Waverley ",
]

// mock data for order
const orderType = ["Type 1", "Type 2", "Type 3", "Type 4", "Type 5"]

// covert zod schema into typescript types
type OrderFormValues = z.infer<typeof orderFromSchema>

const OrderExpectation = ({
  nestedIndex,
  control,
}: {
  nestedIndex: number
  control: Control<OrderFormValues>
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `location.${nestedIndex}.expectation` as const,
  })

  return (
    <section className="space-y-2">
      {fields.map((field, index, array) => (
        <div key={field.id} className="space-y-2">
          <div className="grid grid-cols-2 w-full space-x-2">
            <div>
              <FormField
                control={control}
                name={`location.${nestedIndex}.expectation.${index}.start_date`}
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Start Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 z-50" align="start">
                        <Calendar
                          className="bg-white"
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={control}
                name={`location.${nestedIndex}.expectation.${index}.end_date`}
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>End Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 z-50" align="start">
                        <Calendar
                          className="bg-white"
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 w-full space-x-2">
            <div>
              <FormField
                control={control}
                name={`location.${nestedIndex}.expectation.${index}.start_time`}
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Start Time</FormLabel>
                    <FormControl>
                      <Input
                        type="time"
                        value={field.value}
                        onChange={field.onChange}
                        min="08:00:00"
                        max="17:00:00"
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={control}
                name={`location.${nestedIndex}.expectation.${index}.end_time`}
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>End Time</FormLabel>
                    <FormControl>
                      <Input
                        type="time"
                        value={field.value}
                        onChange={field.onChange}
                        min="08:00"
                        max="17:00"
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className={array.length === 1 ? "hidden" : "block mt-2 w-full"}
            onClick={() => remove(index)}
          >
            Remove Date
          </Button>
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="mt-2"
        onClick={() =>
          append({
            start_date: "" as unknown as Date,
            end_date: "" as unknown as Date,
            start_time: "",
            end_time: "",
          })
        }
      >
        Add Date
      </Button>
    </section>
  )
}

// pass onSubmit as a props
interface FormProps {
  onSubmit: (values: OrderFormValues) => void
}

export default function OrderForm({ onSubmit }: FormProps) {
  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderFromSchema),
    defaultValues: {
      customer_name: "",
      customer_id: "",
      // undefined may conflict with the default state of a controlled component.
      // order_type: undefined,
      location: [
        {
          expectation: [
            {
              start_date: undefined,
              end_date: undefined,
              start_time: "",
              end_time: "",
            },
          ],
        },
      ],
    },
    mode: "onChange",
  })

  const {
    fields: locationFields,
    append: locationAppend,
    remove: locationRemove,
  } = useFieldArray({
    name: "location",
    control: form.control,
  })

  // submit function
  // function onSubmit(values: OrderFormValues) {
  //   console.log(values)
  // }

  return (
    <Form {...form}>
      <Dialog>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Customer ID */}
          <FormField
            control={form.control}
            name="customer_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Customer ID</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    onBlur={(e) =>
                      (e.target.value = e.target.value.padStart(10, "0"))
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Customer Name */}
          <FormField
            control={form.control}
            name="customer_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Customer Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Order Type */}
          <FormField
            control={form.control}
            name="order_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Order Type</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select an order type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {orderType.map((type, index) => (
                      <SelectItem key={index} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Separator />

          {/* Location */}
          <div className="space-y-4">
            {locationFields.map((locationfield, index, array) => (
              <div key={locationfield.id} className="space-y-4">
                <p>Location {index + 1}</p>
                <FormField
                  control={form.control}
                  name={`location.${index}.locationValue`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {locationOptions.map((location, index) => (
                            <SelectItem key={index} value={location}>
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Expectation */}
                <OrderExpectation nestedIndex={index} control={form.control} />
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  className={array.length == 1 ? "hidden" : "block mt-2 w-full"}
                  onClick={() => locationRemove(index)}
                >
                  Remove Location
                </Button>
                <Separator />
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() =>
                locationAppend({
                  locationValue: "",
                  expectation: [
                    {
                      start_date: "" as unknown as Date,
                      end_date: "" as unknown as Date,
                      start_time: "",
                      end_time: "",
                    },
                  ],
                })
              }
            >
              Add location
            </Button>
          </div>
          <Separator />
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comment</FormLabel>
                <FormControl>
                  <Textarea className="resize-none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Submit</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </Dialog>
    </Form>
  )
}
