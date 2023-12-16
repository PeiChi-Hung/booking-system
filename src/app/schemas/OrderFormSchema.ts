import { z } from "zod"

// zod schema
// set restriction for each input
export const orderFromSchema = z.object({
  customer_name: z.string().max(100),
  customer_id: z.string().regex(new RegExp("^[0-9]+$")).max(10),
  order_type: z.string(),
  location: z.array(
    z.object({
      locationValue: z.string(),
      expectation: z.array(
        z
          .object({
            start_date: z.date({
              required_error: "Start date is required",
            }),
            end_date: z.date({
              required_error: "End date is required",
            }),
            start_time: z.string(),
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
