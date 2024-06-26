import ErrorsIdentifier from "../consts/errors-identifiers";

export default class NotFound extends Error {
  statusCode: number;
  code: ErrorsIdentifier;
  constructor(message: string) {
    super(message);

    this.statusCode = 404;
    this.code = ErrorsIdentifier.NotFound;
  }
}
