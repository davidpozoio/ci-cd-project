import ErrorsIdentifier from "../consts/errors-identifiers";

export default class InvalidUUID extends Error {
  statusCode: number = 400;
  code: ErrorsIdentifier = ErrorsIdentifier.InvalidUUID;
  constructor(message: string) {
    super(message);
  }
}
