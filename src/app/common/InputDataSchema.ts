export interface dataFromBackend {
  order_id: string
  customer_id: string
  customer_name: string
  order_type: string
  location: {
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

export interface transformData {
  customer_id: string
  customer_name: string
  order_type: string
  location: {
    locationValue: string
    expectation: {
      start_time: string
      start_date: Date
      end_time: string
      end_date: Date
    }[]
  }[]
  comment: string
}

export const transformOrderType = (inputData: dataFromBackend) => {
  const order_id = {
    order_id: inputData.order_id,
  }
  const order = {
    customer_id: inputData.customer_id,
    customer_name: inputData.customer_name,
    order_type: inputData.order_type,
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

  return { order_id, order }
}
