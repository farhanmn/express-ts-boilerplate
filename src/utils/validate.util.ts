import { ErrorOptions } from "../types/common.type";

const validateParams = (
  param: Record<string, any>,
  mandatoryParams: string[]
): void => {
  const missingParams = mandatoryParams.filter(
    (p) => param[p] === undefined || param[p] === null
  )

  if (missingParams.length > 0) {
    const missing = missingParams.join(', ')
    const error = new Error(`Missing mandatory parameters: ${missing}`) as Error & { statusCode?: number }
    error.statusCode = 400
    throw error
  }
}

const errorValue = (
  condition: boolean,
  { statusCode, message }: ErrorOptions): void => {
  if (condition) {
    const error = new Error(message) as Error & { statusCode?: number }
    error.statusCode = statusCode
    throw error
  }
}

export { validateParams, errorValue }
