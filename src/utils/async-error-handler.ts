import { NextFunction, Response, Request } from "express";
import { validationResult } from "express-validator";

type Controller = (
  request: Request,
  response: Response,
  next: NextFunction
) => Promise<void>;

export const asyncErrorHandlerValidateOnlyController = (
  controller: Controller
) => {
  return (request: Request, response: Response, next: NextFunction) => {
    controller(request, response, next).catch((err) => {
      next(err);
    });
  };
};

const asyncErrorHandler = (controller: Controller) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      next(errors);
      return;
    }

    controller(request, response, next).catch((err) => {
      next(err);
    });
  };
};

export default asyncErrorHandler;
