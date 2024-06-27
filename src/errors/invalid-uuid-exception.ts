import ErrorsIdentifier from "../consts/errors-identifiers";
import HttpError from "./http-error";

export default class InvalidUUID extends HttpError {
  constructor(message: string) {
    super(message);
    this.statusCode = 400;
    this.code = ErrorsIdentifier.InvalidUUID;
  }
}
