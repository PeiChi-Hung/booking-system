import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
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
import { toast } from "./ui/use-toast"
import { ScrollArea } from "./ui/scroll-area"

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

// zod schema
// set restriction for each input
const orderFromSchema = z.object({
  customer_name: z.string().max(100),
  customer_id: z.string().min(9).max(10),
  order_type: z.string(),
  expectation: z.array(
    z
      .object({
        start_date: z.date({
          required_error: "Start date is required",
        }),
        end_date: z.date({
          required_error: "End date is required",
        }),
      })
      .refine((data) => data.end_date >= data.start_date, {
        message: "End date cannot be earlier than start date.",
        path: ["end_date"],
      })
  ),

  location: z
    .array(
      z.object({
        value: z.string().min(1, { message: "Required" }),
      })
    )
    .nonempty("Location is required"),
})

// covert zod schema into typescript types
type OrderFormValues = z.infer<typeof orderFromSchema>

export default function OrderForm() {
  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderFromSchema),
    defaultValues: {
      customer_name: "",
      customer_id: "",
      // undefined may conflict with the default state of a controlled component.
      expectation: [{ start_date: undefined, end_date: undefined }],
      location: [{ value: "" }],
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

  const {
    fields: expectationFields,
    append: expectationAppend,
    remove: expectationRemove,
  } = useFieldArray({
    name: "expectation",
    control: form.control,
  })
  // submit function
  function onSubmit(values: OrderFormValues) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  // function onSubmit(data: OrderFormValues) {
  //   toast({
  //     title: "You submitted the following values:",
  //     description: (
  //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //         <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //       </pre>
  //     ),
  //   })
  // }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
        {/* Customer ID */}
        <FormField
          control={form.control}
          name="customer_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Customer ID</FormLabel>
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
        <div>
          {locationFields.map((locationfield, index) => (
            <div key={locationfield.id}>
              <FormField
                control={form.control}
                name={`location.${index}.value`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index !== 0 && "sr-only")}>
                      Location
                    </FormLabel>
                    <div>
                      <Select onValueChange={field.onChange} defaultValue="">
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {locationOptions.map((type, index) => (
                            <SelectItem key={index} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        className={
                          index === 0 && locationfield.value == ""
                            ? "hidden"
                            : "block mt-2"
                        }
                        onClick={() => locationRemove(index)}
                      >
                        Remove location
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => locationAppend({ value: "" })}
          >
            Add location
          </Button>
        </div>

        {/* Start Date */}
        <div>
          {expectationFields.map((expectationfield, index) => (
            <div key={expectationfield.id}>
              <div className="grid grid-cols-2 w-full space-x-2">
                <div>
                  <FormField
                    control={form.control}
                    name={`expectation.${index}.start_date`}
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className={cn(index !== 0 && "sr-only")}>
                          Start Date
                        </FormLabel>
                        <div>
                          <Popover>
                            <PopoverTrigger asChild className="w-full">
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
                            <PopoverContent
                              className="w-auto p-0 z-50"
                              align="start"
                            >
                              <Calendar
                                className="bg-white"
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date < new Date() ||
                                  date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <Button
                            type="button"
                            variant="secondary"
                            size="sm"
                            className={
                              index === 0 &&
                              !expectationfield.start_date &&
                              !expectationfield.end_date
                                ? "hidden"
                                : "block mt-2"
                            }
                            onClick={() => expectationRemove(index)}
                          >
                            Remove Date
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* End Date */}
                <div>
                  <FormField
                    control={form.control}
                    name={`expectation.${index}.end_date`}
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className={cn(index !== 0 && "sr-only")}>
                          End Date
                        </FormLabel>
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
                          <PopoverContent
                            className="w-auto p-0 z-50"
                            align="start"
                          >
                            <Calendar
                              className="bg-white"
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date < new Date() ||
                                date < new Date("1900-01-01")
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
            </div>
          ))}
          {/* </div> */}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() =>
              expectationAppend({
                start_date: "" as unknown as Date,
                end_date: "" as unknown as Date,
              })
            }
          >
            Add Date
          </Button>
        </div>

        <Separator />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
