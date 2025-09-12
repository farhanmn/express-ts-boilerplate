type SuccessResponse<T = unknown> = {
  status: 'success'
  data?: T
  message?: string
}

type ErrorResponse = {
  status: 'error'
  message: string
}

const defaultResponse = {
  /**
   * Renders a successful JSON response with a list of data.
   */
  renderDatas: <T = any>(datas: T[]): SuccessResponse<T[]> => {
    return {
      status: 'success',
      data: datas,
    }
  },

  /**
   * Renders a successful JSON response with a single data.
   * If no data is provided, renders an error response with a message.
   */
  renderData: <T = any>(data: T | null | undefined): SuccessResponse<T> | ErrorResponse => {
    if (data) {
      return {
        status: 'success',
        data: data,
      }
    } else {
      return {
        status: 'error',
        message: 'Data not found',
      }
    }
  },

  /**
   * Renders a response indicating that the data has been created.
   */
  renderCreatedData: <T = any>(data: T): SuccessResponse<T> => {
    return {
      status: 'success',
      data: data,
      message: 'Data created successfully',
    }
  },

  /**
   * Renders a response indicating that the data has been updated.
   */
  renderUpdatedData: <T = any>(data: T): SuccessResponse<T> => {
    return {
      status: 'success',
      data: data,
      message: 'Data updated successfully',
    }
  },

  /**
   * Renders a response indicating that the data has been deleted.
   */
  renderDeletedData: (): SuccessResponse => {
    return {
      status: 'success',
      message: 'Data deleted successfully',
    }
  },

  /**
   * Renders an error response from an Error object.
   */
  renderError: (error: Error): ErrorResponse => {
    return {
      status: 'error',
      message: error.message,
    }
  },
}

export default defaultResponse
