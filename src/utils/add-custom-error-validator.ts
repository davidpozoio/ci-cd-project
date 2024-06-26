import { validationResult } from "express-validator";
import { asyncErrorHandlerValidateOnlyController } from "./async-error-handler";

const customErrorValidator = (
  Error: new (message: string) => void,
  message: string
) =>
  asyncErrorHandlerValidateOnlyController(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new Error(message);
    }
    next();
  });

export default customErrorValidator;
