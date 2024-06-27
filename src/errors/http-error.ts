import ErrorsIdentifier from "../consts/errors-identifiers";

export default class HttpError extends Error {
  message: string;
  code?: ErrorsIdentifier;
  statusCode: number = 500;

  constructor(message: string) {
    super(message);
    this.message = message;
  }
}
