import { OrderFormValues } from "@/app/common/OrderFormSchema"

interface fetchData {
  customer_id: string
  customer_name: string
  order_type: string
  location: {
    // key: number,
    locationValue: string
    expectation: {
      start_time: string
      start_date: string
      end_time: string
      end_date: string
    }[]
  }[]
  comment: string
}

export const transformOrderType = (inputData: fetchData) => {
  const order = {
    customer_id: inputData.customer_id,
    customer_name: inputData.customer_name,
    order_type: inputData.order_type,

    // key: 0,
    // locationValue: inputData.location[0].locationValue,
    // expectation: [
    //   {
    //     start_date: new Date(
    //       inputData.location[0].expectation[0].start_date
    //     ),
    //     start_time: inputData.location[0].expectation[0].start_time,
    //     end_date: new Date(inputData.location[0].expectation[0].end_date),
    //     end_time: inputData.location[0].expectation[0].end_time,
    //   },
    // ],
    location: inputData.location.map((loc) => ({
      locationValue: loc.locationValue,
      expectation: loc.expectation.map((exp) => ({
        start_time: exp.start_time,
        start_date: new Date(exp.start_date),
        end_time: exp.end_time,
        end_date: new Date(exp.end_date),
      })),
    })),

    comment: inputData.comment,
  }
  return order
}
