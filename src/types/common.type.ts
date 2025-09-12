interface Metadata {
  total: number;
  page: number;
  limit: number;
}

interface ErrorResponse {
  status: number;
  message: string;
}

type ErrorOptions = {
  statusCode: number
  message: string
}

export {
  Metadata,
  ErrorResponse,
  ErrorOptions
}