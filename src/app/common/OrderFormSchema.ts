import { z } from "zod"

// zod schema - set restriction for each input
export const orderFormSchema = z.object({
  customer_id: z.string().regex(new RegExp("^[0-9]+$")).max(10),
  customer_name: z.string().max(100),
  order_type: z.string({ required_error: "Please select an order type." }),
  location: z.array(
    z.object({
      locationValue: z.string({
        required_error: "Please select a location value.",
      }),
      expectation: z.array(
        z
          .object({
            start_date: z.date({
              required_error: "Start date is required",
            }),
            start_time: z.string(),
            end_date: z.date({
              required_error: "End date is required",
            }),
            end_time: z.string(),
          })
          .refine((data) => data.end_date >= data.start_date, {
            message: "End date cannot be earlier than start date.",
            path: ["end_date"],
          })
      ),
    })
  ),
  comment: z.string().max(100).optional(),
})

// covert zod schema into typescript types
export type OrderFormValues = z.infer<typeof orderFormSchema>
