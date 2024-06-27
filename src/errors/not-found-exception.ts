import ErrorsIdentifier from "../consts/errors-identifiers";
import HttpError from "./http-error";

export default class NotFound extends HttpError {
  constructor(message: string) {
    super(message);

    this.statusCode = 404;
    this.code = ErrorsIdentifier.NotFound;
  }
}
