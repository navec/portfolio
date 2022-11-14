interface ErrorOptions {
  cause?: unknown;
}

class Exception extends Error {
  constructor(
    readonly response: string,
    readonly status: number,
    readonly options?: ErrorOptions | undefined
  ) {
    super(response);
  }
}

export class NotFoundException extends Exception {
  constructor(
    message: string | undefined = 'Not Found',
    descriptionOrOptions?: ErrorOptions
  ) {
    super(message, 404, descriptionOrOptions);
  }
}
